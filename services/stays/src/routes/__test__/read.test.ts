import * as request from 'supertest';
import server from '../../app';
import * as mongoose from 'mongoose';
// import { createStay, signup, stay as data } from '../../test/helper';

// describe('/api/stays GET', () => {
//   it('can fetch a list of stays', async () => {
//     // await createStay();
//     // await createStay();

//     const response = await request(server).get('/api/stays').send().expect(200);

//     expect(response.body.length).toBeGreaterThan(0);
//   });
// });

// describe('/api/stays/:id GET', () => {
//   it('returns a 404 if the stay is not found', async () => {
//     const id = new mongoose.Types.ObjectId().toHexString();

//     const response = await request(server).get(`/api/stays/${id}`).send({});

//     expect(response.status).toEqual(404);
//   });

//   it('returns the stay if the stay is found', async () => {
//     const cookie = signup();

//     const response = await request(server)
//       .post('/api/stays')
//       .set('Cookie', cookie)
//       .send(data)
//       .expect(201);

//     const ticketResponse = await request(server)
//       .get(`/api/stays/${response.body.id}`)
//       .send()
//       .expect(200);

//     expect(ticketResponse.body).toBeDefined();
//   });

//   it('returns the corret title of the stay which was queried', async () => {
//     const cookie = signup();

//     const response = await request(server)
//       .post('/api/stays')
//       .set('Cookie', cookie)
//       .send(data)
//       .expect(201);

//     const ticketResponse = await request(server)
//       .get(`/api/stays/${response.body.id}`)
//       .send()
//       .expect(200);

//     expect(ticketResponse.body.title).toEqual(data.title);
//   });

//   it('returns the corret price of the stay which was queried', async () => {
//     const cookie = signup();

//     const response = await request(server)
//       .post('/api/stays')
//       .set('Cookie', cookie)
//       .send(data)
//       .expect(201);

//     const ticketResponse = await request(server)
//       .get(`/api/stays/${response.body.id}`)
//       .send()
//       .expect(200);

//     expect(ticketResponse.body.price).toEqual(data.price);
//   });
// });
