import { Router } from 'express';
import { validate } from 'express-validation';
import * as controller from '../controllers/sewerLevel/sewerLevelController.js';
import * as validation from '../controllers/sewerLevel/sewerLevelValidator.js';

const router = Router();

router.get('/', validate(validation.getSewelLevel), controller.getSewerLevel);

export default router;
