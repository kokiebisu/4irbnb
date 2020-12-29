import request from 'supertest';
import server from '../../app';
import { user as data } from '../../test/helper';

describe('/api/users/signin POST', () => {
  it('fails when a non existing email is provided', async () => {
    return request(server).post('/api/users/signin').send(data).expect(400);
  });

  it('fails when a wrong password is provided', async () => {
    await request(server).post('/api/users/signup').send(data);

    return request(server)
      .post('/api/users/signin')
      .send({
        email: data.email,
        password: 'wrongpassword',
      })
      .expect(400);
  });

  it('expected status code of 200 when correct credentials are provided', async () => {
    await request(server).post('/api/users/signup').send(data);

    return request(server).post('/api/users/signin').send(data).expect(200);
  });

  it('includes cookies in the header when correct credentials are provided', async () => {
    await request(server).post('/api/users/signup').send(data);

    const response = await request(server).post('/api/users/signin').send(data);

    return expect(response.get('Set-Cookie')).toBeDefined();
  });
});
