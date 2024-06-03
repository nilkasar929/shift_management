import { Request, Response } from 'express';
import { Shift } from '../models';

const startShift = async (req: Request, res: Response) => {
  const { id: employeeId } = req.user;

  try {
    const shift = await Shift.create({
      employeeId,
      startTime: new Date(),
    });

    res.status(201).json({ message: 'Shift started', shift });
  } catch (error) {
    res.status(500).json({ message: 'Error starting shift', error });
  }
};

const endShift = async (req: Request, res: Response) => {
  const { id: employeeId } = req.user;

  try {
    const shift = await Shift.findOne({
      where: { employeeId, endTime: null },
    });

    if (!shift) {
      return res.status(404).json({ message: 'Shift not found' });
    }

    shift.endTime = new Date();
    shift.actualHours = (shift.endTime.getTime() - shift.startTime.getTime()) / 3600000;
    await shift.save();

    res.status(200).json({ message: 'Shift ended', shift });
  } catch (error) {
    res.status(500).json({ message: 'Error ending shift', error });
  }
};

export { startShift, endShift };
