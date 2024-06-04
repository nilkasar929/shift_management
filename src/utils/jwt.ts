import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

const generateToken = (user: any) => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  return jwt.sign(payload, process.env.SECRET_KEY as string, { expiresIn: '1h' });
};

export { generateToken };
