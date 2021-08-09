import { PackageEnum } from "../enum";
import { createLoggerService, ILoggerService } from "../utils";
import { IDatabaseClient } from "./dynamodb";
import {
  IDatabaseServiceConstructorParams,
  IDatabaseServiceDeleteParams,
  IDatabaseServiceFindOneByAttributesParams,
  IDatabaseServiceFindOneByIdParams,
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
      packageName: PackageEnum.common,
      className: "DatabaseService",
    });
  }

  /**
   * @public
   * @param param0
   */
  async findOneById({ tableName, id }: IDatabaseServiceFindOneByIdParams) {
    try {
      return await this.#client.get({ tableName, id });
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
  async findOneByAttributes({
    tableName,
    attributes,
  }: IDatabaseServiceFindOneByAttributesParams) {
    try {
      return await this.#client.query({ tableName, filter: attributes });
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
