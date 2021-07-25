import { registerLoginRoute } from "./login";

import { registerCurrentUserRoute } from "./current-user";
import { IServer } from "@nextbnb/common";

export const registerRoutes = (server: IServer) => {
  registerCurrentUserRoute(server);
  registerLoginRoute(server);
};
