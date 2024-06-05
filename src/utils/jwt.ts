import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import credentials from '../common/credentials';
dotenv.config();

const generateToken = (user: any) => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  return jwt.sign(payload, credentials.secret_key.JWT_KEY, { expiresIn: '1h' });
};

export { generateToken };
