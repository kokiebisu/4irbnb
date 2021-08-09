import { PackageEnum } from "../enum";
import { createLoggerService, ILoggerService } from "../utils";
import { IDatabaseClient } from "./nosql/dynamodb";
import {
  IDatabaseService,
  IDatabaseServiceConstructorParams,
  IDatabaseServiceDeleteParams,
  IDatabaseServiceInsertParams,
  IDatabaseServiceUpdateParams,
} from "./types";

/**
 * @public
 */
export class DatabaseService implements IDatabaseService {
  #client: IDatabaseClient;
  #logger: ILoggerService;

  /**
   * @public
   * @param param0
   */
  constructor({ client, databaseType }: IDatabaseServiceConstructorParams) {
    this.#client = client;
    this.#logger = createLoggerService({
      packageName: PackageEnum.common,
      className: `${databaseType}DatabaseService`,
    });
  }

  /**
   * @public
   * @param param0
   */
  async insert({ tableName, data }: IDatabaseServiceInsertParams) {
    try {
      await this.#client.put({ tableName, data });
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
  async delete({ tableName, id }: IDatabaseServiceDeleteParams) {
    try {
      await this.#client.delete({ tableName, id });
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
  async update({ tableName, id, data }: IDatabaseServiceUpdateParams) {
    try {
      await this.#client.update({ tableName, id, data });
    } catch (error) {
      this.#logger.error({
        location: "update:update",
        message: error as string,
      });
    }
  }
}
