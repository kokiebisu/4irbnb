import { IListenParams, IRegisterRouteParams, IServer } from "../types";
import * as Fastify from "fastify";
import * as cors from "cors";
import middie from "middie";

export class FastifyServer implements IServer {
  #client: Fastify.FastifyInstance;

  constructor() {
    this.#client = Fastify.fastify({ logger: true });
  }

  async setup() {
    await this.#client.register(middie);
    this.#client.use(cors());
  }

  registerRoute({ method, path, handler }: IRegisterRouteParams) {
    switch (method) {
      case "GET":
        this.#client.get(path, handler);
        break;
      case "POST":
        this.#client.post(path, handler);
        break;
    }
  }

  async listen({ port }: IListenParams) {
    await this.#client.listen(port, "0.0.0.0");
  }
}
