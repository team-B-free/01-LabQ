import { Router } from "express";
import controller from "../controllers/sewerLevelController/sewerLevelController.js";
const router = Router();

router.get("/api", controller);

export default router;