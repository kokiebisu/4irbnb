import {
  IDatabaseService,
  IDatabaseServiceConstructorParams,
  IDatabaseServiceDeleteParams,
  IDatabaseServiceFindOneParams,
  IDatabaseServiceInsertParams,
} from "./types";

export class DatabaseService {
  #client: IDatabaseService;

  constructor({ client }: IDatabaseServiceConstructorParams) {
    this.#client = client;
  }

  async insert({ tableName, data }: IDatabaseServiceInsertParams) {
    await this.#client.insert({ tableName, data });
  }

  async findOne({ tableName, identifier }: IDatabaseServiceFindOneParams) {
    await this.#client.findOne({ tableName, identifier });
  }

  async delete({ tableName, identifier }: IDatabaseServiceDeleteParams) {
    await this.#client.delete({ tableName, identifier });
  }
}
