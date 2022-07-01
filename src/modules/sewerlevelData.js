import { getTime } from "./measureTime.js";
import "../utils/envConfig.js";
import axios from "axios";

export const getApiData = async (req) => {
  const measure = getTime();
  const gu = req;

  const { startDate, endDate } = measure;
  let data = {};

  //.env 파일에서 서비스인증키를 불러옵니다.
  //const key = process.env.SERVICE_KEY;

  //github 올릴 경우, 빈 값으로 적용
  const key = "";

  let drainLevelUrl = `http://openapi.seoul.go.kr:8088/${key}/json/DrainpipeMonitoringInfo/1/1000/${gu}/${startDate}/${endDate}`;

  try {
    const requestDrainLevel = await axios
      .get(drainLevelUrl)
      .then((result) => {
        data.sewerlevelInfo = result.data.DrainpipeMonitoringInfo.row;
        return result.data;
      })
      .catch((err) => console.log(err));

    let resultDrainData = requestDrainLevel.DrainpipeMonitoringInfo.row;

    let gubnNameData = resultDrainData[0].GUBN_NAM;

    /**서울시 강우량 정보
     * @param {String} gu_name 구청명(용산)
     */
    let rainDropUrl = `http://openapi.seoul.go.kr:8088/${key}/json/ListRainfallService/1/100/${encodeURIComponent(
      gubnNameData
    )}`;

    await axios
      .get(rainDropUrl)
      .then((result) => {
        data.rainfallInfo = result.data.ListRainfallService.row;
        return result.data;
      })
      .catch((err) => console.log(err));

    return data;
  } catch (err) {
    console.error(err);
  }
};
