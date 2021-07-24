import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { TRegion } from "@nextbnb/common";
import { IDatabaseService, IDatabaseServiceDeleteParams, IDatabaseServiceFindManyParams, IDatabaseServiceFindOneParams, IDatabaseServiceUpdateParams } from "../type";
import { IDynamoDBConstructorParams } from "./type";

export class DynamoDBService implements IDatabaseService {
  #region: TRegion
  #client?: DynamoDBClient;
  constructor({region}:IDynamoDBConstructorParams) {
    this.#region = region
  }

  setup() {
    if (!this.#client) {
      this.#client = new DynamoDBClient({
        credentials: {
          accessKeyId: "",
        },
        region: 
      });
    }
  }

  async insert() {
    const command = new Create();
  }

  async findOne({identifier}: IDatabaseServiceFindOneParams) {
    const command = new GetItemCommand({
      Key: identifier,
    });

  }

  async findMany({filter}: IDatabaseServiceFindManyParams) {
   
  }

  async delete({identifier}: IDatabaseServiceDeleteParams) {}

  async update({identifier, data}: IDatabaseServiceUpdateParams) {}
}
