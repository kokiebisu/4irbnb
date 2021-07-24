import { DynamoDBService } from "./class";
import { ICreateDynamoDB } from "./type";

export const createDynamoDB = ({ region }: ICreateDynamoDB) =>
  new DynamoDBService({ region });
