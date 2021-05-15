import * as request from 'supertest';
import server from '../../app';
import { user as data } from '../../test/helper';

describe('/api/users/signup POST', () => {
  it('returns a status of 201 on success', async () => {
    return request(server).post('/api/users/signup').send(data).expect(201);
  });

  it('prohibits request with missing email', () => {
    return request(server)
      .post('/api/users/signup')
      .send({
        email: '',
        password: data.password,
      })
      .expect(400);
  });

  it('prohibits request with missing password', () => {
    return request(server)
      .post('/api/users/signup')
      .send({
        email: data.email,
        password: '',
      })
      .expect(400);
  });

  it('prohibits usage of duplicate emails', async () => {
    await request(server).post('/api/users/signup').send(data);

    return request(server).post('/api/users/signup').send(data).expect(400);
  });

  it('includes cookie inside the header when signup was successful', async () => {
    const response = await request(server).post('/api/users/signup').send(data);

    expect(response.get('Set-Cookie')).toBeDefined();
  });
});
