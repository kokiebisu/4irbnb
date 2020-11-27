import request from 'supertest';
import server from '../../app';

describe('/api/users/signin POST', () => {
  it('fails when a non existing email is provided', async () => {
    return request(server)
      .post('/api/users/signin')
      .send({
        email: 'test@gmail.com',
        password: 'password',
      })
      .expect(400);
  });

  it('fails when a wrong password is provided', async () => {
    await request(server)
      .post('/api/users/signup')
      .send({ email: 'test@gmail.com', password: 'password' });

    return request(server)
      .post('/api/users/signin')
      .send({
        email: 'test@gmail.com',
        password: 'wrongpassword',
      })
      .expect(400);
  });

  it('expected status code of 200 when correct credentials are provided', async () => {
    await request(server).post('/api/users/signup').send({
      email: 'test@gmail.com',
      password: 'password',
    });

    return request(server)
      .post('/api/users/signin')
      .send({
        email: 'test@gmail.com',
        password: 'password',
      })
      .expect(200);
  });

  it('includes cookies in the header when correct credentials are provided', async () => {
    await request(server).post('/api/users/signup').send({
      email: 'test@gmail.com',
      password: 'password',
    });

    const response = await request(server).post('/api/users/signin').send({
      email: 'test@gmail.com',
      password: 'password',
    });

    return expect(response.get('Set-Cookie')).toBeDefined();
  });
});
