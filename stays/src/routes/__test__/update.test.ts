import request from 'supertest';
import server from '../../app';
import mongoose from 'mongoose';
import { createStay } from '../../test/create';
import { signup } from '../../test/signup';

const data = {
  title: 'Updated stay',
  price: 150,
};

describe('/api/stays/:id PUT', () => {
  it('fails if the user is not authenticated', async () => {
    const stayResponse = await createStay();
    const response = await request(server)
      .put(`/api/stays/${stayResponse.body.id}`)
      .send(data);
    expect(response.status).toEqual(401);
  });

  it('fails if the provided id does not exist', async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    const cookie = signup();
    const response = await request(server)
      .put(`/api/stays/${id}`)
      .set('Cookie', cookie)
      .send(data);
    expect(response.status).toEqual(404);
  });

  it('fails if the user does not have the stay', async () => {
    const cookie = signup();
    const stayResponse = await createStay();
    const response = await request(server)
      .put(`/api/stays/${stayResponse.body.id}`)
      .set('Cookie', cookie)
      .send(data);
    expect(response.status).toEqual(401);
  });

  it('succeeds if the user provides valid title and price', async () => {
    const cookie = signup();
    const stayResponse = await createStay(cookie);
    const response = await request(server)
      .put(`/api/stays/${stayResponse.body.id}`)
      .set('Cookie', cookie)
      .send(data);
    expect(response.status).toEqual(200);
  });
});
