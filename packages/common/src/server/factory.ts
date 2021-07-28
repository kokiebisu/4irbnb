import { Server } from "./class";
import { createFastifyServer } from "./fastify/factory";
import { ICreateServerParams } from "./types";

export const createServer = ({
  environment,
  serviceName,
}: ICreateServerParams) =>
  new Server({ server: createFastifyServer(), environment, serviceName });
