import {
  DeleteItemCommand,
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { createLogger, TRegion } from "@nextbnb/common";
import { LoggerService } from "@nextbnb/common/dist/utils/logger/class";
import {
  IDatabaseService,
  IDatabaseServiceDeleteParams,
  IDatabaseServiceFindOneParams,
  IDatabaseServiceInsertParams,
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
      packageName: "database",
      className: "DynamoDBService",
    });
  }

  setup() {
    if (!this.#client) {
      this.#client = DynamoDBDocumentClient.from(
        new DynamoDBClient({
          region: this.#region,
        }),
        translateConfig
      );
    }
  }

  async insert({ tableName, data }: IDatabaseServiceInsertParams) {
    this.#logger.log({ location: "insert", message: "Entered" });
    this.setup();
    await this.#client?.send(
      new PutItemCommand({
        TableName: tableName,
        Item: data,
      })
    );
  }

  async findOne({ tableName, identifier }: IDatabaseServiceFindOneParams) {
    this.#logger.log({ location: "findOne", message: "Entered" });

    console.log("FindOne `before", identifier, tableName);
    this.setup();
    const data = await this.#client?.send(
      new GetItemCommand({
        TableName: tableName,
        Key: identifier,
      })
    );

    console.log("FindOne `Data", data);

    return data;
  }

  async delete({ tableName, identifier }: IDatabaseServiceDeleteParams) {
    this.#logger.log({ location: "delete", message: "Entered" });
    this.setup();
    await this.#client?.send(
      new DeleteItemCommand({
        TableName: tableName,
        Key: identifier,
      })
    );
  }
}
