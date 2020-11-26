import request from 'supertest';
import server from '../app';

export const signup = async () => {
  const email = 'test@gmail.com';
  const password = 'password';

  const response = await request(server)
    .post('/api/users/signup')
    .send({ email, password });

  const cookie = response.get('Set-Cookie');

  return cookie;
};
