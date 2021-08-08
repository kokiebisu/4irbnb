import {
  IBrokerClient,
  IBrokerService,
  IBrokerServiceConstructorParams,
} from "./types";

export class BrokerService implements IBrokerService {
  #client: IBrokerClient;

  constructor({ client }: IBrokerServiceConstructorParams) {
    this.#client = client;
    console.log(this.#client);
  }
}
