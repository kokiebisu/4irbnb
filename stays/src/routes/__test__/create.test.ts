import request from 'supertest';
import server from '../../app';
import { signup } from '../../test/signup';
import { Stay } from '../../models/stay';

const data = {
  title: 'Title stay',
  price: 100,
};

describe('/api/stays POST', () => {
  it('has a route handler listening for post requests', async () => {
    const response = await request(server).post('/api/stays').send(data);
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if the user is signed in', async () => {
    const response = await request(server).post('/api/stays').send(data);
    expect(response.status).toEqual(401);
  });

  it('returns a status 201 if the user is signed in', async () => {
    const cookie = signup();
    const response = await request(server)
      .post('/api/stays')
      .set('Cookie', cookie)
      .send({
        title: 'Test Title',
        price: 80,
      });
    expect(response.status).toEqual(201);
  });

  it('created a ticket with valid inputs', async () => {
    let stays = await Stay.find({});
    expect(stays.length).toEqual(0);

    const cookie = signup();
    await request(server)
      .post('/api/stays')
      .set('Cookie', cookie)
      .send({
        title: 'Test Stay',
        price: 80,
      })
      .expect(201);

    stays = await Stay.find({});
    expect(stays.length).toEqual(1);
  });

  it('created a ticket with correct title', async () => {
    let stays = await Stay.find({});
    expect(stays.length).toEqual(0);

    const cookie = signup();
    const response = await request(server)
      .post('/api/stays')
      .set('Cookie', cookie)
      .send({
        title: 'Test Stay',
        price: 80,
      })
      .expect(201);

    stays = await Stay.find({});
    expect(stays[0].title).toEqual('Test Stay');
  });

  it('created a ticket with correct price', async () => {
    let stays = await Stay.find({});
    expect(stays.length).toEqual(0);

    const cookie = signup();
    await request(server)
      .post('/api/stays')
      .set('Cookie', cookie)
      .send({
        title: 'Test Stay',
        price: 80,
      })
      .expect(201);

    stays = await Stay.find({});

    expect(stays[0].price).toEqual(80);
  });
});
