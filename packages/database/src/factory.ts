import { DatabaseService } from "./class";
import { createDynamoDB } from "./dynamodb";
import { ICreateDatabaseParams } from "./types";

/**
 * @public
 * @param param0
 * @returns
 */
export const createDatabase = ({ region }: ICreateDatabaseParams) =>
  new DatabaseService({ client: createDynamoDB({ region }) });
