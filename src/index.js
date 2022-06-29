import express from "express";
import { ValidationError } from "express-validation";
import { validationResult } from "express-validator";
import routes from "./routes/index.js";
import { errResponse } from "./utils/response.js";
import statusCode from "./utils/statusCode.js";
import message from "./utils/responseMessage.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);
// eslint-disable-next-line
app.use((err, req, res, next) => {
  const errors = validationResult(req);

  if (err instanceof ValidationError || !errors.isEmpty()) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(errResponse(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }
});

export default app;
