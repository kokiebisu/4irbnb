import {
  IDatabaseService,
  IDatabaseServiceConstructorParams,
  IDatabaseServiceDeleteParams,
  IDatabaseServiceFindManyParams,
  IDatabaseServiceFindOneParams,
  IDatabaseServiceInsertParams,
  IDatabaseServiceUpdateParams,
} from "./type";

export class DatabaseService {
  #client: IDatabaseService;

  constructor({ client }: IDatabaseServiceConstructorParams) {
    this.#client = client;
  }

  insert({ data }: IDatabaseServiceInsertParams) {
    this.#client.insert(data);
  }

  findOne({ identifier }: IDatabaseServiceFindOneParams) {
    this.#client.findOne({ identifier });
  }

  findMany({ filter }: IDatabaseServiceFindManyParams) {
    this.#client.findMany(filter);
  }

  delete({ identifier }: IDatabaseServiceDeleteParams) {
    this.#client.delete({ identifier });
  }

  update({ identifier, data }: IDatabaseServiceUpdateParams) {
    this.#client.update({ identifier, data });
  }
}
