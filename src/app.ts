import express from 'express';
import authRoutes from './routes/authRoutes';
import shiftRoutes from './routes/shiftRoutes';
import timesheetRoutes from './routes/timesheetRoutes';
import reportRoutes from './routes/reportRoutes';
import dotenv from 'dotenv'

dotenv.config();


const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/shift', shiftRoutes);
app.use('/api/timesheet', timesheetRoutes);


app.use('/api/report', reportRoutes);


app.listen(process.env.PORT,()=>{
    console.log("Server is running on port",process.env.PORT)
})
