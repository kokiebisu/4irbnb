import { DatabaseService } from "./class";
import { DynamoDBClient } from "./nosql/dynamodb/class";
import { ICreateDatabaseParams } from "./types";

/**
 * @public
 * @param param0
 * @returns
 */
export const createDatabaseService = ({ region }: ICreateDatabaseParams) =>
  new DatabaseService({ client: new DynamoDBClient({ region }) });
