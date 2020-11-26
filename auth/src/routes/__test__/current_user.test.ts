import request from 'supertest';
import server from '../../app';

describe('Current user handler', () => {
  it('responds with proper email of the current user', async () => {
    const signupResponse = await request(server)
      .post('/api/users/signup')
      .send({
        email: 'test@gmail.com',
        password: 'password',
      });

    const cookie = signupResponse.get('Set-Cookie');

    const response = await request(server)
      .get('/api/users/currentuser')
      .set('Cookie', cookie)
      .send({});

    expect(response.body.currentUser.email).toEqual('test@gmail.com');
  });

  it('responds with proper email of the current user', async () => {
    const signupResponse = await request(server)
      .post('/api/users/signup')
      .send({
        email: 'test@gmail.com',
        password: 'password',
      });

    const cookie = signupResponse.get('Set-Cookie');

    const response = await request(server)
      .get('/api/users/currentuser')
      .set('Cookie', cookie)
      .send({});

    expect(response.body.currentUser.password).toEqual('password');
  });
});
