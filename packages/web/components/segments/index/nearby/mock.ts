import { groupByTwo } from '@helper/array';

let items = [
  {
    to: '/',
    imgUrl:
      'https://a0.muscache.com/im/pictures/c2eba2e9-0d80-4704-9e2c-34ac16316c53.jpg?im_q=medq&im_w=240',
    city: 'Tofino',
    hours: 6,
  },
  {
    to: '/',
    imgUrl:
      'https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=240',
    city: 'Sechelt',
    hours: 2.5,
  },
  {
    to: '/',
    imgUrl:
      'https://a0.muscache.com/im/pictures/42901911-940b-45ac-997e-961ebf472195.jpg?im_q=medq&im_w=240',
    city: 'Penticton',
    hours: 5,
  },
  {
    to: '/',
    imgUrl:
      'https://a0.muscache.com/im/pictures/0445ba36-5684-4cca-9cb1-418a0ffdcd2f.jpg?im_q=medq&im_w=240',
    city: 'Sooke',
    hours: 4,
  },
  {
    to: '/',
    imgUrl:
      'https://a0.muscache.com/im/pictures/7d80bee1-a510-4950-a1a0-07a4fb25ec2e.jpg?im_q=medq&im_w=240',
    city: 'Parksville',
    hours: 3.5,
  },
  {
    to: '/',
    imgUrl:
      'https://a0.muscache.com/im/pictures/676c0a60-2a5a-4598-aeeb-10a81aa5232f.jpg?im_q=medq&im_w=240',
    city: 'Kelowna',
    hours: 5,
  },
  {
    to: '/',
    imgUrl:
      'https://a0.muscache.com/im/pictures/3d541658-fb05-4316-af26-b8c1337fbe8c.jpg?im_q=medq&im_w=240',
    city: 'Courtenay',
    hours: 4,
  },
  {
    to: '/',
    imgUrl:
      'https://a0.muscache.com/im/pictures/73ab906b-eea1-425d-9fea-bf2c79d86556.jpg?im_q=medq&im_w=240',
    city: 'Nanaimo',
    hours: 3,
  },
];

items = groupByTwo(items);

export { items };
