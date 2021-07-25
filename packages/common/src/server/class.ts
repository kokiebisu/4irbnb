import {
  IConstructorParams,
  IListenParams,
  IRegisterRouteParams,
  IServer,
} from "./types";

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

  registerRoute({ method, path, handler }: IRegisterRouteParams) {
    this.#server.registerRoute({ method, path, handler });
  }

  async listen({ port }: IListenParams) {
    await this.#server.listen({ port });
  }
}
