import { Router } from 'express';

import authMiddleware from './middleware/auth';

import UserController from './controllers/userController';
import AuthController from './controllers/authController';

const router = Router();

router.get('/index', authMiddleware, AuthController.index)

router.post('/', UserController.store);

router.post('/auth', AuthController.Authenticate);

export default router;