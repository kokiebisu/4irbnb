import { DatabaseService } from "./class";
import { createDynamoDB } from "./dynamodb";
import { ICreateDatabaseParams } from "./types";

export const createDatabase = ({ region }: ICreateDatabaseParams) =>
  new DatabaseService({ client: createDynamoDB({ region }) });
