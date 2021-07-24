import { HttpMethods, IServer } from "@nextbnb/common";
import { StayController } from "../controllers";

export const registerRoutes = (server: IServer) => {
  const handler = new StayController();
  server.registerRoute({method: HttpMethods.GET, path: '/stay/:id', handler: handler.});
};
