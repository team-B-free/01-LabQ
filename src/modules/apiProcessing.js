import { responseRainGauge } from "../utils/responseData.js";

const processData = (originalRainFall, originalSewerLevel) => {
  const { GUBN: gubn, GUBN_NAM: gubnName } = originalSewerLevel[0];

  //한시간 하수관 수위 평균
  const sewerLevelAvg = originalSewerLevel.reduce((pre, cur) => pre + cur.MEA_WAL, 0) / originalSewerLevel.length;

  //동별 강우량(RAINGAUGE_CODE, RAINGAUGE_NAME, 1시간 평균 강우량, 1시간 누적 강우량)
  const filteredRainFall = [];
  const rainGaugeCode = [...new Set(originalRainFall.map(item => item.RAINGAUGE_CODE)) ];
  rainGaugeCode.forEach(code => {
    filteredRainFall.push(originalRainFall.find(item => item.RAINGAUGE_CODE === code));
  });

  const rainGauge = [];
  const rainFallAvgArr = [];
  const rainFallSumArr = [];

  rainGaugeCode.forEach((code) => {
    const rainFall = originalRainFall
      .filter(item => item.RAINGAUGE_CODE === code)
      .map(item => Number(item.RAINFALL10)); 
    
    rainFallAvgArr.push(rainFall.reduce((prev, cur) => prev + cur, 0) / rainFall.length);
    rainFallSumArr.push(rainFall.reduce((prev, cur) => prev + cur, 0));
  });

  filteredRainFall.forEach((item, idx) => {
    delete item.GU_CODE;
    delete item.GU_NAME;
    delete item.RAINFALL10;
    delete item.RECEIVE_TIME;

    rainGauge.push({
      RAINGAUGE_CODE: item.RAINGAUGE_CODE,
      RAINGAUGE_NAME: item.RAINGAUGE_NAME,
      RAINFALL_AVG_PER_HOUR: rainFallAvgArr[idx],
      RAINFALL_SUM_PER_HOUR: rainFallSumArr[idx]
    });
  });

  const data = responseRainGauge(gubn, gubnName, sewerLevelAvg, rainGauge);

  return data;
}

export default processData;