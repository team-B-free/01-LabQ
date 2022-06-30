import { logger } from '../../config/winson.js';
import { response, errResponse } from '../../utils/response.js';
import statusCode from '../../utils/statusCode.js';
import message from '../../utils/responseMessage.js';
import axios from 'axios';

const getRainFallInfo = (originalRainFall) => {
  const filteredRainFall = [];
  const rainGaugeCode = [...new Set(originalRainFall.map(item => item.RAINGAUGE_CODE))];
  rainGaugeCode.forEach(code => {
    filteredRainFall.push(originalRainFall.find(item => item.RAINGAUGE_CODE === code));
  });

  filteredRainFall.forEach((item) => {
    delete item.RAINFALL10;
    delete item.RECEIVE_TIME;
  });

  rainGaugeCode.forEach((code, idx) => {
    const perTenMinuteRain = {};

    let rainFall = originalRainFall.filter(item => item.RAINGAUGE_CODE === code).map(item => item.RAINFALL10);
    let receiveTime = originalRainFall.filter(item => item.RAINGAUGE_CODE === code).map(item => item.RECEIVE_TIME);

    receiveTime.forEach((key, i) => perTenMinuteRain[key] = rainFall[i]);

    filteredRainFall[idx].PER_TEN_MINUTE_RAIN = perTenMinuteRain;
  });

  return filteredRainFall;
}

export const getSewerLevel = async (req, res) => {
  try{
    const RAIN_URL = 'http://openapi.seoul.go.kr:8088/48664f416a61646139365174497742/json/ListRainfallService/';
    const SEWER_URL = 'http://openapi.seoul.go.kr:8088/4e624f487a61646137375171796e4a/json/DrainpipeMonitoringInfo/';

    const getRainFall = async (startPage, endPage, area) => {
        const { data } = await axios.get(RAIN_URL + encodeURIComponent(`${startPage}/${endPage}/${area}`));
        return data;
    };

    //YYYYMMDDHH
    const getSewerLevel = async (startPage, endPage, areaCode, startDate, endDate) => {
        const { data } = await axios.get(SEWER_URL + encodeURIComponent(`${startPage}/${endPage}/${areaCode}/${startDate}/${endDate}`));
        return data;
    };

    const rainFall = await getRainFall(1, 1000, '강남구');
    const sewerLevel = await getSewerLevel(1, 1000, 23, '2022063009', '2022063010');

    //전달받은 데이터
    const receivedData = {
      "rainFall": rainFall.ListRainfallService.row,
      "sewerLevel": sewerLevel.DrainpipeMonitoringInfo.row
    };

    const { rainFall: originalRainFall } = receivedData;

    //10분당 강우량 넣기
    const data = {};
    data.rainFallInfo = getRainFallInfo(originalRainFall);

    return res
    .status(statusCode.OK)
    .send(response(
      statusCode.OK,
      message.SUCCESS,
      data,
    ));
  }
  catch(err){
    logger.error(`getSewerLevel Err: ${err}`);
    console.log(err);

    return res
    .status(statusCode.INTERNAL_SERVER_ERROR)
    .send(errResponse(
      statusCode.INTERNAL_SERVER_ERROR,
      message.INTERNAL_SERVER_ERROR
    ));
  }
}