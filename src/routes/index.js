import { Router } from "express";
import sewerLevelRouter from "./sewerLevelRoute.js";

const router = Router();

const defaultRoutes = [
  {
    path: "/",
    route: sewerLevelRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
