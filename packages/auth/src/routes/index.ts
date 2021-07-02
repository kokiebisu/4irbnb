import { registerLoginRoute } from './login';
import { Server } from '@nextbnb/base';

export const registerRoutes = (server: Server) => {
  registerLoginRoute(server);
};
