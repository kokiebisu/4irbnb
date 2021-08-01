import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import {
  DeleteCommand,
  DynamoDBDocumentClient,
  GetCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";
import { createLogger, PackageEnum, TRegion } from "@nextbnb/common";
import { LoggerService } from "@nextbnb/common/dist/utils/logger/class";
import {
  IDatabaseService,
  IDatabaseServiceDeleteParams,
  IDatabaseServiceFindOneParams,
  IDatabaseServiceInsertParams,
  IDatabaseServiceUpdateParams,
} from "../types";
import { translateConfig } from "./config";
import { IDynamoDBConstructorParams } from "./types";

export class DynamoDBService implements IDatabaseService {
  #region: TRegion;
  #client?: DynamoDBClient;
  #logger: LoggerService;

  constructor({ region }: IDynamoDBConstructorParams) {
    this.#region = region;
    this.#logger = createLogger({
      packageName: PackageEnum.database,
      className: "DynamoDBService",
    });
  }

  /**
   * @public
   */
  configureClient() {
    if (!this.#client) {
      this.#client = DynamoDBDocumentClient.from(
        new DynamoDBClient({
          region: this.#region,
        }),
        translateConfig
      );
    }
  }

  /**
   * @public
   * Finds data to the database
   * @param param0
   * @returns
   */
  async findOne({ tableName, identifier }: IDatabaseServiceFindOneParams) {
    this.configureClient();
    try {
      const data = await this.#client?.send(
        new GetCommand({
          TableName: tableName,
          Key: identifier,
        })
      );

      return data?.Item || null;
    } catch (error) {
      this.#logger.error({
        location: "findOne:send",
        message: error as string,
      });
      return null;
    }
  }

  /**
   * @public
   * Inserts data to the database
   * @param param0
   */
  async insert({ tableName, data }: IDatabaseServiceInsertParams) {
    this.configureClient();
    try {
      await this.#client?.send(
        new PutItemCommand({
          TableName: tableName,
          Item: data,
        })
      );
    } catch (error) {
      this.#logger.error({
        location: "insert:send",
        message: error as string,
      });
    }
  }

  /**
   * Delete operation performed on the DynamoDB database
   * @param param0
   */
  async delete({ tableName, identifier }: IDatabaseServiceDeleteParams) {
    this.configureClient();
    try {
      await this.#client?.send(
        new DeleteCommand({
          TableName: tableName,
          Key: identifier,
        })
      );
    } catch (error) {
      this.#logger.error({
        location: "delete:send",
        message: error as string,
      });
    }
  }

  /**
   * Update operation performed on the DynamoDB database
   * @param param0
   */
  async update({ tableName, identifier }: IDatabaseServiceUpdateParams) {
    this.configureClient();
    try {
      await this.#client?.send(
        new UpdateCommand({
          TableName: tableName,
          Key: identifier,
        })
      );
    } catch (error) {
      this.#logger.error({
        location: "update:send",
        message: error as string,
      });
    }
  }
}
