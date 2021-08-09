import {
  DynamoDBClient as Client,
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";
import {
  DeleteCommand,
  DynamoDBDocumentClient,
  GetCommand,
  UpdateCommand,
  QueryCommand,
} from "@aws-sdk/lib-dynamodb";
import { IDatabaseClientQueryParams } from ".";
import { PackageEnum } from "../../enum";
import { TRegion } from "../../types";
import { createLoggerService, ILoggerService } from "../../utils";
import { translateConfig } from "./config";
import {
  IDatabaseClient,
  IDatabaseClientDeleteParams,
  IDatabaseClientGetParams,
  IDatabaseClientPutParams,
  IDatabaseClientUpdateParams,
  IDynamoDBConstructorParams,
} from "./types";
import { v4 as uuid } from "uuid";

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
      packageName: PackageEnum.common,
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
   * @returns
   */
  async get({ tableName, id }: IDatabaseClientGetParams) {
    this.#configureClient();
    try {
      const data = await this.#package?.send(
        new GetCommand({
          TableName: tableName,
          Key: {
            id,
          },
        })
      );

      return data?.Item || null;
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
   * @param param0
   *
   * @example
   * ```ts
   * const filter = {
   *    email: "random@gmail.com",
   *    firstName: "John"
   * }
   * ```
   * Gets converted to
   * ```ts
   * const params = {
   *    TableName: "~~~",
   *    Key
   * }
   * ```
   */
  async query({ tableName, filter }: IDatabaseClientQueryParams) {
    const expressions = Object.keys(filter).map(
      (attribute) => `${attribute} = ${filter[attribute]}`
    );

    try {
      const params = {
        TableName: tableName,
        KeyConditionExpression: expressions.join(", "),
      };
      return await this.#package?.send(new QueryCommand(params));
    } catch (error) {
      this.#logger.error({
        location: "query:send",
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
  async put({ tableName, data }: IDatabaseClientPutParams) {
    this.#configureClient();
    try {
      await this.#package?.send(
        new PutItemCommand({
          TableName: tableName,
          Item: {
            id: uuid(),
            ...data,
          },
        })
      );
    } catch (error) {
      this.#logger.error({
        location: "put:send",
        message: error as string,
      });
    }
  }

  /**
   * Delete operation performed on the DynamoDB database
   * @param param0
   */
  async delete({ tableName, id }: IDatabaseClientDeleteParams) {
    this.#configureClient();
    try {
      await this.#package?.send(
        new DeleteCommand({
          TableName: tableName,
          Key: {
            id,
          },
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
  async update({ tableName, id, data }: IDatabaseClientUpdateParams) {
    this.#configureClient();
    const expression = Object.keys(data).map(
      (attribute) => `${attribute} = ${data[attribute]}`
    );
    try {
      await this.#package?.send(
        new UpdateCommand({
          TableName: tableName,
          Key: { id },
          UpdateExpression: `set ${expression.join(", ")}`,
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
