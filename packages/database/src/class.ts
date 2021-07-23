import { IDatabaseService } from "./type";

export class DatabaseService<T> {
  #client: IDatabaseService;
  constructor(client: IDatabaseService) {
    this.#client = client;
  }

  insert(data: T) {
    this.#client.insert(data);
  }

  findOne(identifier: string) {
    this.#client.findOne(identifier);
  }

  findMany(filter: any) {
    this.#client.findMany(filter);
  }
}
