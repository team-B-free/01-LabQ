import axios from 'axios';
import { logger } from '../../config/winson.js';
import { response, errResponse } from '../../utils/response.js';
import statusCode from '../../utils/statusCode.js';
import message from '../../utils/responseMessage.js';
import apiProcessing from '../../modules/apiProcessing.js';

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

    const { rainFall: originalRainFall, sewerLevel: originalSewerLevel } = receivedData;
    const data = apiProcessing(originalRainFall, originalSewerLevel);

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