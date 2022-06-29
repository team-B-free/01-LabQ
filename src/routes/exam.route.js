import { Router } from 'express';
import { validate } from 'express-validation';
import * as controller from '../controllers/exam/exam.controller.js';
import * as validator from '../controllers/exam/exam.validator.js';

const router = Router();

router.get('/', validate(validator.getTests), controller.getTests);

export default router;
