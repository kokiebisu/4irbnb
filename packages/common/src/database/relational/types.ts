import { IDatabaseService } from "../types";

export interface IRelationalDatabaseConstructorParams {
  client: IRelationalDatabaseClient;
}

export interface IRelationalDatabaseService extends IDatabaseService {}

export interface IRelationalDatabaseClient {}
