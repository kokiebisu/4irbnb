import { Logger } from "../utils";

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
export class Server {
  #logger: Logger;
  #server: IServer;

  constructor({ server, environment, serviceName }: IConstructorParams) {
    this.#logger = new Logger(serviceName, "info", "1111", environment);
    this.#server = server;
  }

  async setup() {
    try {
      await this.#server.setup();
    } catch (error) {
      this.#logger.output(`[@common:server:setup:setup]: ${error}`);
    }
  }

  registerRoute({ method, path, handler, schema }: IRegisterRouteParams) {
    this.#server.registerRoute({ method, path, handler, schema });
  }

  async listen({ port }: IListenParams) {
    try {
      await this.#server.listen({ port });
    } catch (error) {
      this.#logger.output(`[@common:server:listen:listen]: ${error}`);
    }
  }
}
