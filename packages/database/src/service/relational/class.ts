import {
  IRelationalDatabaseClient,
  IRelationalDatabaseService,
  IRelationalDatabaseServiceConstructorParams,
  IRelationalDatabaseServiceCreateProps,
  IRelationalDatabaseServiceDeleteProps,
  IRelationalDatabaseServiceFindAllByAttributesProps,
  IRelationalDatabaseServiceFindByAttributesProps,
  IRelationalDatabaseServiceInitializeProps,
  IRelationalDatabaseServiceUpdateProps,
} from "./types";
import { LoggerUtils, ILoggerUtils } from "@4irbnb/common";
import { PACKAGE_NAME } from "../..";
import { RDSClient } from "../../infra/rds";

export class RelationalDatabaseService<
  T extends {
    [key: string]: any;
  }
> implements IRelationalDatabaseService {
  #logger: ILoggerUtils = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });
  #client: IRelationalDatabaseClient;
  #tableName: string;

  constructor({
    client,
    tableName,
  }: IRelationalDatabaseServiceConstructorParams) {
    this.#client = client;
    this.#tableName = tableName;
    this.#logger.log({
      location: "constructor",
      message: "Successfully initialized...",
    });
  }

  public static async initialize({
    region,
    tableName,
  }: IRelationalDatabaseServiceInitializeProps) {
    return new RelationalDatabaseService({
      client: await RDSClient.initialize({ region }),
      tableName,
    });
  }

  /**
   * @public
   * @param param0
   */
  async findByAttributes({
    attributes,
  }: IRelationalDatabaseServiceFindByAttributesProps) {
    const condition = Object.keys(attributes)
      .map((key) => `${key} = '${attributes[key]}'`)
      .join(" AND ");
    try {
      return await this.#client.execute({
        sql: `SELECT * FROM ${this.#tableName} WHERE ${condition}`,
      });
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
  async findAllByAttributes({
    attributes,
  }: IRelationalDatabaseServiceFindAllByAttributesProps) {
    console.log(attributes);
    try {
      return await this.#client.batchExecute({ sql: "" });
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
  async create({ data }: IRelationalDatabaseServiceCreateProps<T>) {
    const keys: string[] = [];
    const values: string[] = [];
    Object.keys(data).forEach((key: string) => {
      keys.push(key);
      switch (typeof data[key]) {
        case "string":
          values.push(`'${data[key]}'`);
          break;
        case "number":
          values.push(data[key]);
          break;
        case "object":
          values.push(`'{${data[key].join(", ")}}'`);
          break;
      }
    });
    const sql = `INSERT INTO ${this.#tableName} (${keys.join(
      ", "
    )}) VALUES (${values.join(", ")})`;
    try {
      await this.#client.execute({ sql });
      return data;
    } catch (error: any) {
      this.#logger.error({
        location: "create:execute",
        message: error,
      });
      return null;
    }
  }

  /**
   * @public
   * @param param0
   */
  async delete({ id }: IRelationalDatabaseServiceDeleteProps) {
    console.log(id);
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
  async update({ id, data }: IRelationalDatabaseServiceUpdateProps) {
    console.log(id, data);
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
