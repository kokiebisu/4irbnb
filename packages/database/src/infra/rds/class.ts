import {
  BatchExecuteStatementCommand,
  ExecuteStatementCommand,
  RDSDataClient as DataClient,
} from "@aws-sdk/client-rds-data";
import {
  RDSClient as Client,
  DescribeDBInstancesCommand,
  ConnectionPoolConfiguration,
} from "@aws-sdk/client-rds";
import {
  SecretsManagerClient as SecretsClient,
  ListSecretsCommand,
} from "@aws-sdk/client-secrets-manager";
import {
  IRelationalDatabaseClient,
  IRelationalDatabaseClientBatchExecuteProps,
  IRelationalDatabaseClientConstructorProps,
  IRelationalDatabaseClientExecuteProps,
  IRelationalDatabaseClientInitializeProps,
} from "../../service/relational/types";
import { PACKAGE_NAME } from "../..";
import {
  LoggerUtils,
  ILoggerUtils,
  IRegion,
  InternalError,
  TRegion,
} from "@4irbnb/common";
import { DB_INSTANCE_IDENTIFIER } from "../../config";
import { ManagerService } from "@4irbnb/manager";
import { Connection, createConnection, Query } from "mysql";
import { promisify } from "util";

/**
 * @public
 * Relational Database that can be used for listing
 * - Transactions
 */
export class RDSClient implements IRelationalDatabaseClient {
  // #package: DataClient;
  // #resourceArn: string;
  // #databaseName: string;
  // #secretArn: string;
  #conn: Connection;

  #logger: ILoggerUtils = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });

  private constructor({ host, user, port, password }: any) {
    console.debug("CREATE CONNECTION", {
      host,
      user,
      password,
      port,
    });
    this.#conn = createConnection({
      host,
      user,
      port,
      password,
    });

    this.#conn.connect();
  }

  public static async initialize({
    serviceName,
    region,
  }: IRelationalDatabaseClientInitializeProps) {
    const configClient = new Client({
      region,
    });
    try {
      const { DBInstances } = await configClient.send(
        new DescribeDBInstancesCommand({
          DBInstanceIdentifier: DB_INSTANCE_IDENTIFIER,
        })
      );

      if (!DBInstances) {
        throw new InternalError({
          location: "initialize:{!DBClusters}",
          message: "DBClusters not fetched",
        });
      }

      const targetInstance = DBInstances.find(
        (instance: any) =>
          instance.DBInstanceIdentifier === DB_INSTANCE_IDENTIFIER
      );

      if (!targetInstance) {
        throw new InternalError({
          location: "initialize:{!targetInstance}",
          message: "targetInstance not fetched",
        });
      }

      const host = targetInstance.Endpoint?.Address;
      const port = targetInstance.Endpoint?.Port;

      const manager = ManagerService.initialize({ serviceName, region });
      const user = await manager.get({ key: "DB_USERNAME" });
      if (!user) {
        throw new InternalError({
          location: "initialize:{!dbUsername}",
          message: "dbUsername not fetched",
        });
      }
      const password = await manager.get({ key: "DB_PASSWORD" });
      if (!password) {
        throw new InternalError({
          location: "initialize:{!dbPassword}",
          message: "dbPassword not fetched",
        });
      }

      return new RDSClient({ host, user, password, port });
    } catch (error: any) {
      console.debug("ERROR HERE", error);
      process.exit(1);
    }
  }

  /**
   * @public
   * Finds data to the database
   * @returns
   */
  async execute({ sql }: IRelationalDatabaseClientExecuteProps) {
    try {
      const query = await promisify(this.#conn.query.bind(this.#conn));
      const result = await query(sql);
      // return (
      //   await this.#package?.send(
      //     new ExecuteStatementCommand({
      //       resourceArn: this.#resourceArn,
      //       database: this.#databaseName,
      //       secretArn: this.#secretArn,
      //       includeResultMetadata: true,
      //       sql,
      //     })
      //   )
      // ).records;
      console.debug("YO", result);
      this.#conn.end();
      return result;
    } catch (error) {
      this.#logger.error({
        location: "execute:query",
        message: error as string,
      });
      return null;
    }
  }

  // /**
  //  * @public
  //  * Finds data to the database
  //  * @returns
  //  */
  // async batchExecute({ sql }: IRelationalDatabaseClientBatchExecuteProps) {
  //   try {
  //     // const data = await this.#package?.send(
  //     //   new BatchExecuteStatementCommand({
  //     //     resourceArn: this.#resourceArn,
  //     //     database: this.#databaseName,
  //     //     secretArn: this.#secretArn,
  //     //     sql,
  //     //   })
  //     // );

  //     return data;
  //   } catch (error) {
  //     this.#logger.error({
  //       location: "batchExecute:send",
  //       message: error as string,
  //     });
  //     return null;
  //   }
  // }
}
