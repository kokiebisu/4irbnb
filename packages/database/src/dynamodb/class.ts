import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { TRegion } from "@nextbnb/common";
import { IDatabaseService } from "../type";

export class DynamoDB implements IDatabaseService {
  #client?: DynamoDBClient;
  constructor({region}:IConstructorParams) {

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

  async findOne(identifier: string) {
    const command = new GetItemCommand({
      Key: identifier,
    });
    return;
  }

  async findMany(filter) {
    const command = new Batch();
  }

  async delete() {}

  async update() {}
}
