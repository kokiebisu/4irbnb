import { IDatabaseClient } from "../nosql/dynamodb";

export interface IRelationalDatabaseConstructorParams {
  client: IRelationalDatabaseClient;
}

export interface IRelationalDatabaseService extends IDatabaseService {
  findOneById(): Promise<any | null>;
}

export interface IRelationalDatabaseClient extends IDatabaseClient {
  findOneById(): Promise<any | null>;
}
