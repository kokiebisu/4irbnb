import {
  IRelationalDatabaseClient,
  IRelationalDatabaseService,
  IRelationalDatabaseServiceConstructorParams,
  IRelationalDatabaseServiceCreateProps,
  IRelationalDatabaseServiceDeleteProps,
  IRelationalDatabaseServiceUpdateProps,
} from "./types";
import { IRegion, LoggerUtils, ILoggerUtils } from "@4irbnb/common";
import { PACKAGE_NAME } from "../..";
import { RDSClient } from "../../infra/rds";

export class RelationalDatabaseService implements IRelationalDatabaseService {
  #logger: ILoggerUtils = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });
  #client: IRelationalDatabaseClient;
  constructor({ client }: IRelationalDatabaseServiceConstructorParams) {
    this.#client = client;
    this.#logger.log({
      location: "constructor",
      message: "Successfully initialized...",
    });
  }

  public static async initialize({ region }: IRegion) {
    return new RelationalDatabaseService({
      client: await RDSClient.initialize({ region }),
    });
  }

  /**
   * @public
   * @param param0
   */
  async findByAttribute({ attributes }: IRelationalDatabaseServiceUpdateProps) {
    try {
      await this.#client.execute({ sql: "" });
    } catch (error: any) {
      this.#logger.error({
        location: "findByAttribute:execute",
        message: error,
      });
    }
  }

  /**
   * @public
   * @param param0
   */
  async findAllByAttribute({
    attributes,
  }: IRelationalDatabaseServiceUpdateProps) {
    try {
      await this.#client.batchExecute({ sql: "" });
    } catch (error: any) {
      this.#logger.error({
        location: "findAllByAttribute:batchExecute",
        message: error,
      });
    }
  }

  /**
   * @public
   * @param param0
   */
  async create({ tableName, data }: IRelationalDatabaseServiceCreateProps) {
    try {
      await this.#client.execute({ sql: "" });
    } catch (error: any) {
      this.#logger.error({
        location: "create:execute",
        message: error,
      });
    }
  }

  /**
   * @public
   * @param param0
   */
  async delete({ tableName, id }: IRelationalDatabaseServiceDeleteProps) {
    try {
      await this.#client.execute({ sql: "" });
    } catch (error: any) {
      this.#logger.error({
        location: "delete:delete",
        message: error,
      });
    }
  }

  /**
   * @public
   * @param param0
   */
  async update({ tableName, id, data }: IRelationalDatabaseServiceUpdateProps) {
    try {
      await this.#client.execute({ sql: "" });
    } catch (error: any) {
      this.#logger.error({
        location: "update:execute",
        message: error,
      });
    }
  }
}
