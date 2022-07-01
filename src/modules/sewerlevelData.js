import { getTime } from "./measureTime.js";
import "../utils/envConfig.js";
import axios from "axios";

const getApiData = async (gu) => {
  const measure = getTime();

  const { startDate, endDate } = measure;
  let data = {};

  //.env 파일에서 서비스인증키를 불러옵니다.
  const key = process.env.SERVICE_KEY;

  let drainLevelUrl = `http://openapi.seoul.go.kr:8088/${key}/json/DrainpipeMonitoringInfo/1/1000/${gu}/${startDate}/${endDate}`;

  try {
    const requestDrainLevel = await axios
      .get(drainLevelUrl)
      .then((result) => {
        data.sewerLevelInfo = result.data.DrainpipeMonitoringInfo.row;
        return result.data;
      })
      .catch((err) => console.log(err));

    let resultDrainData = requestDrainLevel.DrainpipeMonitoringInfo.row;

    let gubnNameData = resultDrainData[0].GUBN_NAM;

    /**서울시 강우량 정보
     * @param {String} gu_name 구청명(용산)
     */
    let rainDropUrl = `http://openapi.seoul.go.kr:8088/${key}/json/ListRainfallService/1/50/${encodeURIComponent(
      gubnNameData
    )}`;

    await axios
      .get(rainDropUrl)
      .then((result) => {
        data.rainfall = result.data.ListRainfallService.row;
        return result.data;
      })
      .catch((err) => console.log(err));

    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getApiData;
