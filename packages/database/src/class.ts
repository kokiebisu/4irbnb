import { createLogger, ILoggerService, PackageEnum } from "@nextbnb/common";
import {
  IDatabaseService,
  IDatabaseServiceConstructorParams,
  IDatabaseServiceDeleteParams,
  IDatabaseServiceFindOneParams,
  IDatabaseServiceInsertParams,
} from "./types";

export class DatabaseService {
  #client: IDatabaseService;
  #logger: ILoggerService;

  constructor({ client }: IDatabaseServiceConstructorParams) {
    this.#client = client;
    this.#logger = createLogger({
      packageName: PackageEnum.database,
      className: "DatabaseService",
    });
  }

  async findOne({ tableName, identifier }: IDatabaseServiceFindOneParams) {
    try {
      const data = await this.#client.findOne({ tableName, identifier });
      return data;
    } catch (error) {
      this.#logger.error({
        location: "findOne:findOne",
        message: error as string,
      });
    }
  }

  async insert({ tableName, data }: IDatabaseServiceInsertParams) {
    try {
      await this.#client.insert({ tableName, data });
    } catch (error) {
      this.#logger.error({
        location: "insert:insert",
        message: error as string,
      });
    }
  }

  async delete({ tableName, identifier }: IDatabaseServiceDeleteParams) {
    try {
      await this.#client.delete({ tableName, identifier });
    } catch (error) {
      this.#logger.error({
        location: "delete:delete",
        message: error as string,
      });
    }
  }
}
