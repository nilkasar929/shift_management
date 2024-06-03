import { Router } from 'express';
import { generateReport } from '../controllers/reportController';
import authMiddleware from '../utils/authMiddle';

const router = Router();

router.get('/report', authMiddleware, generateReport);

export default router;
