import request from 'supertest';
import server from '../app';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

export const stay = {
  title: 'Test stay',
  price: 100,
};

export const updatedStay = {
  title: 'Updated stay',
  price: 150,
};

export const user = {
  email: 'test@gmail.com',
  password: 'password',
};

export const createStay = async (cookie?: string) => {
  const newCookie = signup();
  return request(server)
    .post('/api/stays')
    .set('Cookie', cookie || newCookie)
    .send(stay);
};

export const signup = () => {
  const newUser = {
    id: new mongoose.Types.ObjectId().toHexString(),
    ...user,
  };
  const token = jwt.sign(newUser, process.env.JWT_KEY!);
  const base64 = Buffer.from(JSON.stringify({ jwt: token })).toString('base64');

  return `express:sess=${base64}`;
};
