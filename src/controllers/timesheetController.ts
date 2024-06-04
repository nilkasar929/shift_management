import { Request, Response } from 'express';
import Timesheet  from '../models/timesheet';

const createTimesheet = async (req: Request, res: Response) => {
  const { id: employeeId }:any = req.user;
  const { shiftId, projectName, taskName, fromDate, toDate } = req.body;

  try {
    const timesheet = await Timesheet.create({
      employeeId,
      shiftId,
      projectName,
      taskName,
      fromDate,
      toDate,
    });

    res.status(201).json({ message: 'Timesheet entry created', timesheet });
  } catch (error) {
    res.status(500).json({ message: 'Error creating timesheet entry', error });
  }
};

export { createTimesheet };
