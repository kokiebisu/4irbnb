import {
  DeleteItemCommand,
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";
import { TRegion } from "@nextbnb/common";
import {
  IDatabaseService,
  IDatabaseServiceDeleteParams,
  IDatabaseServiceFindOneParams,
  IDatabaseServiceInsertParams,
} from "../type";
import { IDynamoDBConstructorParams } from "./type";

export class DynamoDBService implements IDatabaseService {
  #region: TRegion;
  #client?: DynamoDBClient;

  constructor({ region }: IDynamoDBConstructorParams) {
    this.#region = region;
  }

  setup() {
    if (!this.#client) {
      this.#client = new DynamoDBClient({
        region: this.#region,
      });
    }
  }

  async insert({ tableName, data }: IDatabaseServiceInsertParams) {
    this.setup();
    await this.#client?.send(
      new PutItemCommand({
        TableName: tableName,
        Item: data,
      })
    );
  }

  async findOne({ tableName, identifier }: IDatabaseServiceFindOneParams) {
    this.setup();
    const data = await this.#client?.send(
      new GetItemCommand({
        TableName: tableName,
        Key: identifier,
      })
    );
    return data;
  }

  async delete({ tableName, identifier }: IDatabaseServiceDeleteParams) {
    this.setup();
    await this.#client?.send(
      new DeleteItemCommand({
        TableName: tableName,
        Key: identifier,
      })
    );
  }
}
