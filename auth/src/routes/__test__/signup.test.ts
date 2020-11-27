import request from 'supertest';
import server from '../../app';

describe('/api/users/signup POST', () => {
  it('returns a status of 201 on success', async () => {
    return request(server)
      .post('/api/users/signup')
      .send({
        email: 'example@gmail.com',
        password: 'password',
      })
      .expect(201);
  });

  it('prohibits request with missing email', () => {
    return request(server)
      .post('/api/users/signup')
      .send({
        email: '',
        password: 'password',
      })
      .expect(400);
  });

  it('prohibits request with missing password', () => {
    return request(server)
      .post('/api/users/signup')
      .send({
        email: 'test@gmail.com',
        password: '',
      })
      .expect(400);
  });

  it('prohibits usage of duplicate emails', async () => {
    await request(server).post('/api/users/signup').send({
      email: 'example@gmail.com',
      password: 'password',
    });

    return request(server)
      .post('/api/users/signup')
      .send({
        email: 'example@gmail.com',
        password: 'password',
      })
      .expect(400);
  });

  it('includes cookie inside the header when signup was successful', async () => {
    const response = await request(server).post('/api/users/signup').send({
      email: 'example@gmail.com',
      password: 'password',
    });

    expect(response.get('Set-Cookie')).toBeDefined();
  });
});
