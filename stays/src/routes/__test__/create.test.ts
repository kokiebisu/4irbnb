import request from 'supertest';
import server from '../../app';
import { signup } from '../../test/signup';

describe('/api/stays POST', () => {
  it('has a route handler listening for post requests', async () => {
    const response = await request(server).post('/api/stays').send();
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if the user is signed in', async () => {
    await request(server).post('/api/stays').send().expect(401);
  });

  it('returns a status 200 if the user is signed in', async () => {
    const cookie = signup();
    const response = await request(server)
      .post('/api/stays')
      .set('Cookie', cookie)
      .send();

    expect(response.status).toEqual(200);
  });

  it('created a ticket with valid inputs', async () => {
    const cookie = signup();
    const response = await request(server)
      .post('/api/stays')
      .set('Cookie', cookie)
      .send({
        title: 'Test Stay',
        price: 80,
      });
    expect(response.status).toEqual(201);
  });
});
