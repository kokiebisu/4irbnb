import { Logger } from "@nextbnb/utils";
import * as Fastify from "fastify";
import middie from "middie";
import * as cors from "cors";
import {
  IConstructorParams,
  IListenParams,
  IRegisterRouteParams,
  IServer,
} from "./type";

/**
 * @public
 * An abstraction of the microservice servers
 */
export class Server implements IServer {
  #logger: Logger;
  #server: Fastify.FastifyInstance;

  constructor({ server, environment, serviceName }: IConstructorParams) {
    this.#logger = new Logger(serviceName, "info", "1111", environment);

    this.#server = server;
  }

  async setup() {
    try {
      await this.#server.register(middie);
      this.#server.use(cors());
    } catch (error) {
      console.error(`[@common:server:setup:register]`);
    }
  }

  registerRoute({ method, path, handler, schema }: IRegisterRouteParams) {
    switch (method) {
      case "GET":
        this.#server.get(path, schema, handler);
        break;
      case "POST":
        this.#server.post(path, schema, handler);
        break;
    }
  }

  async listen({ port }: IListenParams) {
    try {
      await this.#server.listen(port, "0.0.0.0");
      this.#logger.output(`Server is listening on ${this.#port}`);
    } catch (err) {
      this.#logger.output(`Failed to start server: ${err as string}`);
    }
  }
}
