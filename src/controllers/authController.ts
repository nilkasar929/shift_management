import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import  Employee from '../models/employee';
import  {generateToken}  from '../utils/jwt';


//code for registration
const register = async (req: Request, res: Response) => {
  const { name, email, password, assignedShiftHours, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const employee = await Employee.create({
      name,
      email,
      password: hashedPassword,
      assignedShiftHours,
      role,
    });

    res.status(201).json({ message: 'Employee registered successfully', employee });
  } catch (error) {
    res.status(500).json({ message: 'Error registering employee', error });
  }
};

//code for login of the employee
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;


  try {
    const employee = await Employee.findOne({ where: { email } });
    if (!employee) {
      return res.status(404).json({ message: 'Employee not present' });
    }

    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect username or password' });
    }

    
    const token = generateToken(employee);
    
    res.status(200).json({ 'message':"Log in succesful", 'token':token });
  }catch (error) {
    res.status(500).json({ message: 'Error while logging in', error });
  }
};

const users = async(req: Request, res: Response) =>{
  try {
    const allUsers = Employee.findAll();

    return allUsers;

  } catch (error) {
    throw error;
  }
}



export { register, login,users };
