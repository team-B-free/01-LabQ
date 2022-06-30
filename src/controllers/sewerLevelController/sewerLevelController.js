import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export const getApiData = async (req, res) => {
  /** 서울시 하수관로 수위 현황
   * @param {String} guCode 구분코드(01)
   * @param {String} startDate 측정시작날짜(YYYYMMDDHH24)
   * @param {String} endDate 측정종료날짜(YYYYMMDDHH24)
   */
  const { gu_code, start_date, end_date } = req.query;
  const key = "";

  let drainLevelUrl = `http://openapi.seoul.go.kr:8088/${key}/json/DrainpipeMonitoringInfo/1/3/${gu_code}/${start_date}/${end_date}`;

  try {
    const requestDrainLevel = await axios
      .get(drainLevelUrl)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    let resultDrainData = requestDrainLevel.DrainpipeMonitoringInfo.row;

    let gubnNameData = resultDrainData[0].GUBN_NAM;

    /**서울시 강우량 정보
     * @param {String} gu_name 구청명(용산)
     */
    let rainDropUrl = `http://openapi.seoul.go.kr:8088/${key}/json/ListRainfallService/1/3/${encodeURIComponent(
      gubnNameData
    )}`;

    const requestRainDropLevel = await axios
      .get(rainDropUrl)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    let resultRainData = requestRainDropLevel.ListRainfallService.row;

    let resultData = [{ resultDrainData }];
    resultData.push({ resultRainData });

    res.json(resultData);
  } catch (err) {
    console.error(err);
  }
};
