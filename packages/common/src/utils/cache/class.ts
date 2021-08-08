import {
  ICacheClient,
  ICacheService,
  ICacheServiceConstructorParams,
} from "./types";

export class CacheService implements ICacheService {
  #client: ICacheClient;
  constructor({ client }: ICacheServiceConstructorParams) {
    this.#client = client;
    console.log(this.#client);
  }
}
