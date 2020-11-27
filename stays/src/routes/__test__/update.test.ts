import request from 'supertest';
import server from '../../app';
import mongoose from 'mongoose';
import { createStay } from '../../test/create';

describe('/api/stays/:id PUT', () => {
  it('fails if the user is not authenticated', async () => {
    const stayResponse = await createStay();
    const response = await request(server)
      .put(`/api/stays/${stayResponse.body.id}`)
      .send({
        title: 'Updated stay',
        price: 150,
      });
    console.log('statuscode', response.status);
    expect(response.status).toEqual(401);
  });

  it('fails if the provided id does not exist', async () => {
    // const id = new mongoose.Types.ObjectId().toHexString();
  });

  it('fails if the user does not have the stay', async () => {});

  it('fails if the user provides an invalid title or price', async () => {});

  it('succeeds if the user provides valid title and price', async () => {});
});
