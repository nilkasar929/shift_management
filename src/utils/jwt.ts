import jwt from 'jsonwebtoken';

const generateToken = (user: any) => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(payload, 'your_secret_key', { expiresIn: '1h' });
};

export { generateToken };
