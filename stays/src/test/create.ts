import request from 'supertest';
import server from '../app';
import { signup } from './signup';

export const createStay = async () => {
  const cookie = signup();
  return request(server).post('/api/stays').set('Cookie', cookie).send({
    title: 'Test stay',
    price: 100,
  });
};
