import { Router } from "express";
// import { query } from "express-validator";
// import controller from "../controllers/sewerLevelController/sewerLevelController.js";
import sewerLevelRouter from "./sewerLevel/sewerLevelRoute.js";
const router = Router();

const defaultRoutes = [
  {
    path: "/api",
    route: sewerLevelRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

// router.get(
//   "/",
//   query("startDate").isISO8601().toDate(),
//   query("endDate").isISO8601().toDate(),
//   controller
// );

export default router;
