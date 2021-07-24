import {
  IDatabaseService,
  IServiceConstructorParams,
  IServiceDeleteParams,
  IServiceFindManyParams,
  IServiceFindOneParams,
  IServiceInsertParams,
  IServiceUpdateParams,
} from "./type";

export class DatabaseService {
  #client: IDatabaseService;

  constructor({ client }: IServiceConstructorParams) {
    this.#client = client;
  }

  insert({ data }: IServiceInsertParams) {
    this.#client.insert(data);
  }

  findOne({ identifier }: IServiceFindOneParams) {
    this.#client.findOne({ identifier });
  }

  findMany({ filter }: IServiceFindManyParams) {
    this.#client.findMany(filter);
  }

  delete({ identifier }: IServiceDeleteParams) {
    this.#client.delete({ identifier });
  }

  update({ identifier, data }: IServiceUpdateParams) {
    this.#client.update({ identifier, data });
  }
}
