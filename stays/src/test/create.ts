import request from 'supertest';
import server from '../app';
import { signup } from './signup';

export const createStay = async (cookie?: string) => {
  const newCookie = signup();
  return request(server)
    .post('/api/stays')
    .set('Cookie', cookie || newCookie)
    .send({
      title: 'Test stay',
      price: 100,
    });
};
