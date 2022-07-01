import { response, errResponse } from "../utils/response.js";
import statusCode from "../utils/statusCode.js";
import message from "../utils/responseMessage.js";

const getData = async (req, res) => {
  const { guCode } = req.query;
  const someModule = (guCode) => {
    return { 결과: guCode };
  }; // 데이터 처리 모듈
  const data = someModule(guCode) ?? {};

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
