import { response, errResponse } from "../../utils/response.js";
import statusCode from "../../utils/statusCode.js";
import message from "../../utils/responseMessage.js"
import getApiData from "../../modules/sewerlevelData.js";
import apiProcessing from "../../modules/apiProcessing.js";

const getData = async (req, res) => {
  const { guCode } = req.query;

  const rawData = await getApiData(guCode) ?? {};
  const { sewerlevelInfo, rainfallInfo } = rawData;
  const data = apiProcessing(rainfallInfo, sewerlevelInfo);

  if (data) {
    return res
      .status(statusCode.OK)
      .send(response(statusCode.OK, message.SUCCESS, data));
  } else {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(errResponse(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }
};

export default getData;
