import { Router } from 'express';
import { generateReport } from '../controllers/reportController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.get('/report', authMiddleware, generateReport);

export default router;
