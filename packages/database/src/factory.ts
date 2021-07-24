import { DatabaseService } from "./class";
import { createDynamoDB } from "./dynamodb/factory";
import { ICreateDatabaseParams } from "./type";

export const createDatabase = ({ region }: ICreateDatabaseParams) =>
  new DatabaseService({ client: createDynamoDB({ region }) });
