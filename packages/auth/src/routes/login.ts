import { Server } from '@nextbnb/base';
import { HttpMethods } from '../../../common/dist';
import { createAuthService } from '../service';

const schema = {
  body: {
    type: 'object',
    require: ['username', 'password'],
    properties: {
      username: { type: 'string' },
      password: { type: 'string' },
    },
    additionalProperties: false,
  },
  response: {
    200: {
      type: 'object',
      require: ['jwt'],
      properties: {
        jwt: { type: 'string' },
      },
      additionalProperties: false,
    },
  },
};

const handler = async (req: any, _: any) => {
  const database = 'something';
  const service = createAuthService(database);
  const { username, password } = req.body;
  const user = await service.login(username, password); // will eventually add 'async'
  return user;
};

export const registerLoginRoute = (server: Server) => {
  server.registerRoute(HttpMethods.GET, '/', { schema }, handler);
};
