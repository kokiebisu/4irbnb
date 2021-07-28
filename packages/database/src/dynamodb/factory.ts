import { DynamoDBService } from "./class";
import { ICreateDynamoDB } from "./types";

export const createDynamoDB = ({ region }: ICreateDynamoDB) =>
  new DynamoDBService({ region });
