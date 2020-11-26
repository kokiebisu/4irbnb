import request from 'supertest';
import server from '../../app';
import { signup } from '../../test/helper';

describe('Current user handler', () => {
  it('responds with id of the current user', async () => {
    const cookie = await signup();

    const response = await request(server)
      .get('/api/users/currentuser')
      .set('Cookie', cookie)
      .send();

    expect(response.body.currentUser.id).toBeDefined();
  });
  it('responds with proper email of the current user', async () => {
    const cookie = await signup();

    const response = await request(server)
      .get('/api/users/currentuser')
      .set('Cookie', cookie)
      .send();

    expect(response.body.currentUser.email).toEqual('test@gmail.com');
  });
  it('responds with undefined if not authenticated', async () => {
    const response = await request(server).get('/api/users/currentuser').send();

    expect(response.body.currentUser).toBeUndefined();
  });
});
