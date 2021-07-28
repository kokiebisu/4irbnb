import { HttpMethods } from "@nextbnb/common";
import { IRegisterRouteParams } from "./types";

export const registerGetRoute = ({ server, handler }: IRegisterRouteParams) => {
  server.registerRoute({
    method: HttpMethods.GET,
    path: "/stay",
    handler: handler.get,
  });
};
