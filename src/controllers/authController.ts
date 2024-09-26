import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import  User from '../models/User';
import  {generateToken}  from '../utils/jwt';


//code for registration
const register = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const User1 = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({ message: 'User registered successfully', User1 });
  } catch (error:any) {
    res.status(500).json({ message: 'Error registering User', error});
  }
};

//code for login of the User
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;


  try {
    const User1 = await User.findOne({ where: { email } });
    if (!User1) {
      return res.status(404).json({ message: 'User not present' });
    }

    const isMatch = await bcrypt.compare(password, User1.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect username or password' });
    }

    
    const token = generateToken(User1);
    
    res.status(200).json({ 'message':"Log in succesful", 'token':token });
  }catch (error) {
    res.status(500).json({ message: 'Error while logging in', error });
  }
};

const users = async(req: Request, res: Response) =>{
  try {
    const allUsers = await User.findAll();

    
    const user1 = await allUsers.map((item)=>{
     return item.dataValues

    })
    res.status(200).json(user1);

  } catch (error) {
    throw error;
  }
}



export { register, login,users };
