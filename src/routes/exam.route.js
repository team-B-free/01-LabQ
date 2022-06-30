import { Router } from 'express';
import { validate } from 'express-validation';
import * as controller from '../controllers/exam/exam.controller.js';

const router = Router();

router.get('/', controller.getTests);

export default router;
