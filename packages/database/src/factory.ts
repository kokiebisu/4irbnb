import { DatabaseService } from "./class";
import { createDynamoDB } from "./dynamodb/factory";

export const createDatabase = ({ region }: IRegion) =>
  new DatabaseService({ client: createDynamoDB({ region }) });
