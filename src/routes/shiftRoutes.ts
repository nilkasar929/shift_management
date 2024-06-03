import { Router } from 'express';
import { startShift, endShift } from '../controllers/shiftController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.post('/start', authMiddleware, startShift);
router.post('/end', authMiddleware, endShift);

export default router;
