import { DynamoDBClient } from "./class";
import { ICreateDynamoDB } from "./types";

export const createDynamoDB = ({ region }: ICreateDynamoDB) =>
  new DynamoDBClient({ region });
