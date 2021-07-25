import { HttpMethods, IServer } from "@nextbnb/common";
import { createAuthService } from "../service";

const schema = {
  body: {
    type: "object",
    require: ["username", "password"],
    properties: {
      username: { type: "string" },
      password: { type: "string" },
    },
    additionalProperties: false,
  },
  response: {
    200: {
      type: "object",
      require: ["jwt"],
      properties: {
        jwt: { type: "string" },
      },
      additionalProperties: false,
    },
  },
};

const handler = async (req: any, res: any) => {
  const database = "something";
  const service = createAuthService(database);
  const { username, password } = req.body;
  const user = await service.login(username, password); // will eventually add 'async'
  res.send({
    status: 200,
    data: user,
  });
};

export const registerLoginRoute = (server: IServer) => {
  server.registerRoute({
    method: HttpMethods.POST,
    path: "/login",
    schema,
    handler,
  });
};
