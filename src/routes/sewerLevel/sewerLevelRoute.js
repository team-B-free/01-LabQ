import { Router } from "express";
import * as controller from "../../controllers/sewerLevelController/sewerLevelController.js";
const router = Router();

router.get("/", controller.getTest);

export default router;
