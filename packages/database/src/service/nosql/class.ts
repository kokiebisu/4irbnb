import { DynamoDBClient } from "../../infra/dynamodb";
import {
  INoSqlDatabaseClient,
  INoSqlDatabaseService,
  INoSqlDatabaseServiceConstructorParams,
  INoSqlDatabaseServiceCreateProps,
  INoSqlDatabaseServiceDeleteProps,
  INoSqlDatabaseServiceFindByIdParams,
  INoSqlDatabaseServiceFindByKeyParams,
  INoSqlDatabaseServiceFindByRangeParams,
  INoSqlDatabaseServiceUpdateProps,
} from "./types";
import { IRegion, LoggerUtils, ILoggerUtils } from "@4irbnb/common";
import { PACKAGE_NAME } from "../..";

export class NoSqlDatabaseService implements INoSqlDatabaseService {
  #logger: ILoggerUtils = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });
  #client: INoSqlDatabaseClient;
  constructor({ client }: INoSqlDatabaseServiceConstructorParams) {
    this.#client = client;
    this.#logger.log({
      location: "constructor",
      message: "Successfully initialized...",
    });
  }

  public static async initialize({ region }: IRegion) {
    return new NoSqlDatabaseService({
      client: await DynamoDBClient.initialize({ region }),
    });
  }

  /**
   * @public
   */
  async findOneById({ tableName, id }: INoSqlDatabaseServiceFindByIdParams) {
    return this.#client.get({ tableName, id });
  }

  /**
   * @public
   */
  async findByRange({
    tableName,
    attributes,
    range,
  }: INoSqlDatabaseServiceFindByRangeParams) {
    return this.#client.query({ tableName, attributes, range });
  }

  /**
   * @public
   */
  async findByKey({
    tableName,
    attributes,
  }: INoSqlDatabaseServiceFindByKeyParams) {
    return this.#client.get({ tableName, attributes });
  }

  /**
   * @public
   * @param param0
   */
  async findById({ tableName, id }: INoSqlDatabaseServiceUpdateProps) {
    try {
      await this.#client.get({ tableName, id });
    } catch (error) {
      this.#logger.error({
        location: "findById:find",
        message: error as string,
      });
    }
  }

  /**
   * @public
   * @param param0
   */
  async create({ tableName, data }: INoSqlDatabaseServiceCreateProps) {
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
  async delete({ tableName, id }: INoSqlDatabaseServiceDeleteProps) {
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
  async update({ tableName, id, data }: INoSqlDatabaseServiceUpdateProps) {
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
