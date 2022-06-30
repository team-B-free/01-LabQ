import { Router } from "express";
import { query } from "express-validator";
import controller from "../controllers/sewerLevelController.js";

const router = Router();

router.get(
  "/",
  query("startDate").isISO8601().toDate(),
  query("endDate").isISO8601().toDate(),
  controller
);

export default router;
