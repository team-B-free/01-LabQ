import { Router } from 'express';
import examRouter from './exam.route.js';

const router = Router();

const defaultRoutes = [
  {
    path: '/exams',
    route: examRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;