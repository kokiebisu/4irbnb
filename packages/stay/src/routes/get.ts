import { HttpMethods } from "@nextbnb/common";
import { IRegisterRouteParams } from "./types";

const schema = {};

export const registerGetRoute = ({ server, handler }: IRegisterRouteParams) => {
  server.registerRoute({
    method: HttpMethods.GET,
    path: "/stay/:id",
    handler: handler.get,
    schema,
  });
};
