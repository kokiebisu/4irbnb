import { createLogger, ILoggerService, PackageEnum } from "@nextbnb/common";
import {
  IDatabaseService,
  IDatabaseServiceConstructorParams,
  IDatabaseServiceDeleteParams,
  IDatabaseServiceFindOneParams,
  IDatabaseServiceInsertParams,
  IDatabaseServiceUpdateParams,
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
      return await this.#client.findOne({ tableName, identifier });
    } catch (error) {
      this.#logger.error({
        location: "findOne:findOne",
        message: error as string,
      });
      return null;
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

  async update({ tableName, identifier, data }: IDatabaseServiceUpdateParams) {
    try {
      await this.#client.update({ tableName, identifier, data });
    } catch (error) {
      this.#logger.error({
        location: "update:update",
        message: error as string,
      });
    }
  }
}
