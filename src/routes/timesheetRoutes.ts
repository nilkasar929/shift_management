import { Router } from 'express';
import { createTimesheet } from '../controllers/timesheetController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.post('/', authMiddleware, createTimesheet);

export default router;
