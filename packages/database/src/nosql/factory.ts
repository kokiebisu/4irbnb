import { IRegion } from "../..";
import { NoSqlDatabaseService } from "./class";
import { DynamoDBClient } from "./dynamodb";

export const createNoSqlDatabaseService = ({ region }: IRegion) =>
  new NoSqlDatabaseService({ client: new DynamoDBClient({ region }) });
