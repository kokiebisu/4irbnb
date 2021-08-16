import {
  BatchExecuteStatementCommand,
  ExecuteStatementCommand,
  RDSDataClient as Client,
} from "@aws-sdk/client-rds-data";
import {
  IRelationalDatabaseClient,
  IRelationalDatabaseClientBatchExecuteProps,
  IRelationalDatabaseClientConstructorProps,
  IRelationalDatabaseClientExecuteProps,
} from "../../service/relational/types";
import { PACKAGE_NAME } from "../..";
import { LoggerUtils, ILoggerUtils, IRegion } from "@4irbnb/common";

/**
 * @public
 * Relational Database that can be used for listing
 * - Transactions
 */
export class RDSClient implements IRelationalDatabaseClient {
  #package: Client;
  #resourceArn: string;
  #databaseName: string;
  #secretArn: string;
  #logger: ILoggerUtils = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });

  private constructor({
    region,
    resourceArn,
    databaseName,
    secretArn,
  }: IRelationalDatabaseClientConstructorProps) {
    this.#databaseName = databaseName;
    this.#secretArn = secretArn;
    this.#resourceArn = resourceArn;
    this.#package = new Client({ region });
  }

  public static async initialize({ region }: IRegion) {
    /**
     * Logic to fetch resourceArn
     */
    const resourceArn = "";
    /**
     * Logic to databaseName
     */
    const databaseName = "";
    /**
     * Logic to secretArn
     */
    const secretArn = "";
    return new RDSClient({ region, resourceArn, databaseName, secretArn });
  }

  /**
   * @public
   * Finds data to the database
   * @returns
   */
  async execute({ sql }: IRelationalDatabaseClientExecuteProps) {
    try {
      const data = await this.#package?.send(
        new ExecuteStatementCommand({
          resourceArn: this.#resourceArn,
          database: this.#databaseName,
          secretArn: this.#secretArn,
          sql,
        })
      );

      return data;
    } catch (error) {
      this.#logger.error({
        location: "get:send",
        message: error as string,
      });
      return null;
    }
  }

  /**
   * @public
   * Finds data to the database
   * @returns
   */
  async batchExecute({ sql }: IRelationalDatabaseClientBatchExecuteProps) {
    try {
      const data = await this.#package?.send(
        new BatchExecuteStatementCommand({
          resourceArn: this.#resourceArn,
          database: this.#databaseName,
          secretArn: this.#secretArn,
          sql,
        })
      );

      return data;
    } catch (error) {
      this.#logger.error({
        location: "get:send",
        message: error as string,
      });
      return null;
    }
  }
}
