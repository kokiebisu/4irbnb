import { Server } from "./class";
import { createFastifyServer } from "./fastify/factory";
import { ICreateServerParams } from "./type";

export const createServer = ({
  environment,
  serviceName,
}: ICreateServerParams) =>
  new Server({ server: createFastifyServer(), environment, serviceName });
