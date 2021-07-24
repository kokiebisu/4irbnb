import { Server } from "@nextbnb/base";
import { HttpMethods } from "@nextbnb/common";

const schema = {
  response: {
    200: {
      type: "object",
      properties: {
        data: {
          username: { type: "string" },
        },
      },
    },
  },
};

const handler = async (_: any, res: any) => {
  //   const database = 'something';
  //   const service = createAuthService(database);
  //   const user = await service.findUser(username, password); // will eventually add 'async'
  res.send({
    status: 200,
    data: { username: "johnparker" },
  });
};

export const registerCurrentUserRoute = (server: Server) => {
  server.registerRoute(HttpMethods.GET, "/current-user", { schema }, handler);
};
