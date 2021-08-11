import { IDatabaseService } from "../types";

/**
 * @public
 */
export interface IRelationalDatabaseServiceConstructorParams {
  client: IRelationalDatabaseClient;
}

/**
 * @public
 */
export interface IRelationalDatabaseService extends IDatabaseService {}

// CLIENT

/**
 * @public
 */
export interface IRelationalDatabaseClient {
  findOneById(
    params: IRelationalDatabaseClientFindOneByIdParams
  ): Promise<any | null>;
  findOneByIdentifier(): Promise<any | null>;
  findByAttributes(): Promise<any | null>;
}

/**
 * @public
 */
export interface IRelationalDatabaseClientConstructorParams {
  [key: string]: string;
}

/**
 * @public
 */
export interface IRelationalDatabaseClientFindOneByIdParams {
  tableName: string;
  id: string;
}
