import { Router } from 'express';
import { register, login,users } from '../controllers/authController';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/users',users);

export default router;