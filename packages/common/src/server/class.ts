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
  #server: IServer;

  constructor({ server }: IConstructorParams) {
    this.#server = server;
  }

  async setup() {
    await this.#server.setup();
  }

  registerRoute({ method, path, handler, schema }: IRegisterRouteParams) {
    this.#server.registerRoute({ method, path, handler, schema });
  }

  async listen({ port }: IListenParams) {
    await this.#server.listen({ port });
  }
}
