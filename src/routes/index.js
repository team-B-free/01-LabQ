import { Router } from 'express';
import examRouter from './exam.route.js';
import sewerLevelRouter from './sewerLevelRoute.js';

const router = Router();

const defaultRoutes = [
  {
    path: '/exams',
    route: examRouter,
  },
  {
    path: '/sewers',
    route: sewerLevelRouter,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;