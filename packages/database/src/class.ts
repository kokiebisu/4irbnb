import {
  IDatabaseService,
  IDatabaseServiceConstructorParams,
  IDatabaseServiceDeleteParams,
  IDatabaseServiceFindOneParams,
  IDatabaseServiceInsertParams,
} from "./type";

export class DatabaseService {
  #client: IDatabaseService;

  constructor({ client }: IDatabaseServiceConstructorParams) {
    this.#client = client;
  }

  insert({ tableName, data }: IDatabaseServiceInsertParams) {
    this.#client.insert({ tableName, data });
  }

  findOne({ tableName, identifier }: IDatabaseServiceFindOneParams) {
    this.#client.findOne({ tableName, identifier });
  }

  delete({ tableName, identifier }: IDatabaseServiceDeleteParams) {
    this.#client.delete({ tableName, identifier });
  }
}
