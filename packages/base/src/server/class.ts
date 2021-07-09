import { Logger } from "@nextbnb/utils";
import { TEnvironment, ServiceEnum, HttpMethods } from "@nextbnb/common";
import * as Fastify from "fastify";
import middie from "middie";
import * as cors from "cors";

/**
 * @public
 * An abstraction of the microservice servers
 */
export class Server {
  #logger: Logger;
  #environment: TEnvironment;
  #serviceName: ServiceEnum;
  #server: Fastify.FastifyInstance;
  #port: number;

  constructor(
    serviceName: ServiceEnum,
    environment: TEnvironment,
    port: number
  ) {
    this.#logger = new Logger(serviceName, "info", "1111", "development");
    this.#environment = environment;
    this.#serviceName = serviceName;
    this.#port = port;

    this.#server = Fastify.fastify({ logger: true });
  }

  async configure() {
    this.#logger.output(
      `[${this.#environment}] Initializing HTTP server for the ${
        this.#serviceName
      }`
    );
    await this.#server.register(middie);
    this.#server.use(cors());
  }

  registerRoute(method: HttpMethods, path: string, schema: any, handler: any) {
    switch (method) {
      case "GET":
        this.#server.get(path, schema, handler);
        break;
      case "POST":
        this.#server.post(path, schema, handler);
        break;
    }
  }

  async listen() {
    try {
      await this.#server.listen(this.#port, "0.0.0.0");
      this.#logger.output(`Server is listening on ${this.#port}`);
    } catch (err) {
      this.#logger.output(`Failed to start server: ${err as string}`);
    }
  }
}
