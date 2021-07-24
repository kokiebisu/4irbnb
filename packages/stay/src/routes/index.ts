import { StayController } from "./controllers";

export const registerRoutes = (server) => {
  const handler = new StayController();
  server.registerRoute(HttpMethods.GET, "/", { schema }, handler.get);
};
