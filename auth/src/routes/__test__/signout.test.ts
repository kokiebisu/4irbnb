import request from 'supertest';
import server from '../../app';
import { user as data } from '../../test/helper';

describe('/api/users/signout POST', () => {
  it('clears out the attached cookie from the request header', async () => {
    await request(server).post('/api/users/signup').send(data);

    const response = await request(server).post('/api/users/signout').send({});
    expect(response.get('Set-Cookie')[0]).toEqual(
      'express:sess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly'
    );
  });
});
