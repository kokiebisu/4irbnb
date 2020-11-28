import request from 'supertest';
import server from '../app';

export const user = {
  email: 'test@gmail.com',
  password: 'password',
};

export const signup = async () => {
  const response = await request(server).post('/api/users/signup').send(user);

  const cookie = response.get('Set-Cookie');

  return cookie;
};
