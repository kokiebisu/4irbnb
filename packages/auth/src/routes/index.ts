import { registerLoginRoute } from './login';
import { Server } from '@nextbnb/base';
import { registerCurrentUserRoute } from './current-user';

export const registerRoutes = (server: Server) => {
  registerCurrentUserRoute(server);
  registerLoginRoute(server);
};
