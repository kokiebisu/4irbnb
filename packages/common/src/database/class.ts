import { PackageEnum } from "../enum";
import { createLoggerService, ILoggerService } from "../utils";
import { IDatabaseClient } from "./dynamodb";
import {
  IDatabaseServiceConstructorParams,
  IDatabaseServiceDeleteParams,
  IDatabaseServiceFindOneParams,
  IDatabaseServiceInsertParams,
  IDatabaseServiceUpdateParams,
} from "./types";

export class DatabaseService {
  #client: IDatabaseClient;
  #logger: ILoggerService;

  /**
   * @public
   * @param param0
   */
  constructor({ client }: IDatabaseServiceConstructorParams) {
    this.#client = client;
    this.#logger = createLoggerService({
      packageName: PackageEnum.database,
      className: "DatabaseService",
    });
  }

  /**
   * @public
   * @param param0
   */
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

  /**
   * @public
   * @param param0
   */
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

  /**
   * @public
   * @param param0
   */
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

  /**
   * @public
   * @param param0
   */
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
