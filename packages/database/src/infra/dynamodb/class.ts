import { DynamoDBClient as Client } from "@aws-sdk/client-dynamodb";
import {
  DeleteCommand,
  DynamoDBDocumentClient,
  GetCommand,
  UpdateCommand,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";

import { translateConfig } from "./config";

import { v4 as uuid } from "uuid";
import {
  INoSqlDatabaseClient,
  INoSqlDatabaseClientDeleteParams,
  INoSqlDatabaseClientGetParams,
  INoSqlDatabaseClientPutParams,
  INoSqlDatabaseClientQueryParams,
  INoSqlDatabaseClientUpdateParams,
} from "../../service/nosql/types";
import { PACKAGE_NAME } from "../..";
import { LoggerUtils, ILoggerUtils, IRegion } from "@4irbnb/common";

/**
 * @public
 * NoSQL Database that can be used for listing
 * - Transactions
 */
export class DynamoDBClient implements INoSqlDatabaseClient {
  #package?: DynamoDBDocumentClient;
  #logger: ILoggerUtils = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });

  private constructor({ region }: IRegion) {
    this.#package = DynamoDBDocumentClient.from(
      new Client({
        region,
      }),
      translateConfig
    );
  }

  public static async initialize({ region }: IRegion) {
    return new DynamoDBClient({ region });
  }

  /**
   * @public
   * Finds data to the database
   * @returns
   */
  async get({ tableName, id }: INoSqlDatabaseClientGetParams) {
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
  async query({
    tableName,
    attributes,
    range,
  }: INoSqlDatabaseClientQueryParams) {
    const expressions = Object.keys(attributes).map(
      (property) => `${property} = ${attributes[property]}`
    );
    console.log("range", range);

    try {
      const params = {
        FilterExpression: "property1 = :attribute",
      };
      console.log("params", params);
      const response = await this.#package?.send(
        new GetCommand({
          TableName: tableName,
          Key: expressions,
        })
      );
      console.log("RESPONSE", response);
      return response;
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
  async put({ tableName, data }: INoSqlDatabaseClientPutParams) {
    const params = {
      TableName: tableName,
      Item: {
        id: uuid(),
        ...data,
      },
    };

    try {
      const response = await this.#package?.send(new PutCommand(params));
      console.log("response", response);
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
  async delete({ tableName, id }: INoSqlDatabaseClientDeleteParams) {
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
  async update({ tableName, id, data }: INoSqlDatabaseClientUpdateParams) {
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
