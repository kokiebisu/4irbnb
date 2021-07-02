import { Logger } from '@nextbnb/utils';
import { TEnvironment, ServiceEnum } from '@nextbnb/common';
import * as Fastify from 'fastify';
import middie from 'middie';
import * as cors from 'cors';

/**
 * @public
 * An abstraction of the microservice servers
 */
export abstract class BaseServer {
  logger: Logger;
  environment: TEnvironment;
  serviceName: ServiceEnum;
  server: Fastify.FastifyInstance;
  #port: number;

  constructor(
    serviceName: ServiceEnum,
    environment: TEnvironment,
    port: number
  ) {
    this.logger = new Logger({
      level: 'info',
      service: serviceName,
      environment,
    });
    this.environment = environment;
    this.serviceName = serviceName;
    this.#port = port;

    this.server = Fastify.fastify({ logger: true });
  }

  async configure() {
    this.logger.output(
      `[${this.environment}] Initializing HTTP server on port: ${this.#port}`
    );
    await this.server.register(middie);
    this.server.use(cors());
  }

  async listen() {
    try {
      await this.server.listen(this.#port);
      this.logger.output(`Server is listening to ${this.#port}`);
    } catch (err) {
      this.logger.output(`Failed to start server: ${err as string}`);
    }
  }
}
