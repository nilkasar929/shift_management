import express from 'express';
import authRoutes from './routes/authRoutes';
import shiftRoutes from './routes/shiftRoutes';
import timesheetRoutes from './routes/timesheetRoutes';
import { syncModels } from './models';
import reportRoutes from './routes/reportRoutes';

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/shift', shiftRoutes);
app.use('/api/timesheet', timesheetRoutes);


app.use('/api/report', reportRoutes);
syncModels().then(() => {
  console.log('Database synced');
});

export default app;
