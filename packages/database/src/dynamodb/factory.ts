import { DynamoDB } from "./class";
import { ICreateDynamoDB } from "./type";

export const createDynamoDB = ({ region }: ICreateDynamoDB) =>
  new DynamoDB({ region });
