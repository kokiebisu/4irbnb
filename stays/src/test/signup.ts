import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

export const signup = () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  const email = 'test@gmail.com';
  const password = 'password';

  const token = jwt.sign(
    {
      id,
      email,
      password,
    },
    process.env.JWT_KEY!
  );

  const base64 = Buffer.from(JSON.stringify({ jwt: token })).toString('base64');

  return `express:sess=${base64}`;
};
