import {
  BatchExecuteStatementCommand,
  ExecuteStatementCommand,
  RDSDataClient as DataClient,
} from "@aws-sdk/client-rds-data";
import {
  RDSClient as Client,
  DescribeDBClustersCommand,
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
} from "../../service/relational/types";
import { PACKAGE_NAME } from "../..";
import {
  LoggerUtils,
  ILoggerUtils,
  IRegion,
  InternalError,
} from "@4irbnb/common";
import { CLUSTER_NAME, DATABASE_NAME } from "../../config/rds";

/**
 * @public
 * Relational Database that can be used for listing
 * - Transactions
 */
export class RDSClient implements IRelationalDatabaseClient {
  #package: DataClient;
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
    this.#package = new DataClient({ region });
  }

  public static async initialize({ region }: IRegion) {
    const configClient = new Client({
      region,
    });
    try {
      const { DBClusters } = await configClient.send(
        new DescribeDBClustersCommand({
          DBClusterIdentifier: CLUSTER_NAME,
        })
      );

      if (!DBClusters) {
        throw new InternalError({
          location: "initialize:{!DBClusters}",
          message: "DBClusters not fetched",
        });
      }

      const resourceArn = DBClusters[0].DBClusterArn!;
      /**
       * Logic to databaseName
       */
      const databaseName = DATABASE_NAME;
      /**
       * Logic to secretArn
       */

      const secretsConfig = new SecretsClient({
        region,
      });
      const { SecretList } = await secretsConfig.send(
        new ListSecretsCommand({})
      );
      if (!SecretList) {
        throw new InternalError({
          location: "initialize:{!SecretList}",
          message: "SecretList not fetched",
        });
      }
      const targetSecret = SecretList.find((config) =>
        config.Description?.includes("cluster-airbnb")
      );
      if (!targetSecret) {
        throw new InternalError({
          location: "initialize:{!targetSecret}",
          message: "SecretList not fetched",
        });
      }
      const secretArn = targetSecret.ARN!;
      return new RDSClient({ region, resourceArn, databaseName, secretArn });
    } catch (error: any) {
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
      return (
        await this.#package?.send(
          new ExecuteStatementCommand({
            resourceArn: this.#resourceArn,
            database: this.#databaseName,
            secretArn: this.#secretArn,
            includeResultMetadata: true,
            sql,
          })
        )
      ).records;
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
