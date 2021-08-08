import {
  DynamoDBClient as Client,
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";
import {
  DeleteCommand,
  DynamoDBDocumentClient,
  GetCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";
import { PackageEnum } from "../../enum";
import { TRegion } from "../../types";
import { createLoggerService, ILoggerService } from "../../utils";
import { translateConfig } from "./config";
import {
  IDatabaseClient,
  IDatabaseClientDeleteParams,
  IDatabaseClientFindOneParams,
  IDatabaseClientInsertParams,
  IDatabaseClientUpdateParams,
  IDynamoDBConstructorParams,
} from "./types";

/**
 * @public
 */
export class DynamoDBClient implements IDatabaseClient {
  #region: TRegion;
  #package?: DynamoDBDocumentClient;
  #logger: ILoggerService;

  constructor({ region }: IDynamoDBConstructorParams) {
    this.#region = region;
    this.#logger = createLoggerService({
      packageName: PackageEnum.database,
      className: "DynamoDBClient",
    });
  }

  /**
   * @public
   */
  #configureClient() {
    if (!this.#package) {
      this.#package = DynamoDBDocumentClient.from(
        new Client({
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
  async findOne({ tableName, identifier }: IDatabaseClientFindOneParams) {
    this.#configureClient();
    try {
      const data = await this.#package?.send(
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
  async insert({ tableName, data }: IDatabaseClientInsertParams) {
    this.#configureClient();
    try {
      await this.#package?.send(
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
  async delete({ tableName, identifier }: IDatabaseClientDeleteParams) {
    this.#configureClient();
    try {
      await this.#package?.send(
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
  async update({ tableName, identifier }: IDatabaseClientUpdateParams) {
    this.#configureClient();
    try {
      await this.#package?.send(
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
