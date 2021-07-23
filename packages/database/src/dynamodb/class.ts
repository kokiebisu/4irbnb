import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { IDatabaseService } from "../type";

export class DynamoDB implements IDatabaseService {
  #client: DynamoDBClient;
  constructor() {}

  setup() {
    if (!this.#client) {
      this.#client = new DynamoDBClient();
    }
  }

  insert() {
    const command = new GetItemCommand();
  }

  async findOne(identifier: string) {
    const command = new GetItemCommand({
      Key: identifier,
    });
    return;
  }

  findMany;
}
