import { IRegion } from "../types";
import { IDatabaseClient } from "./nosql/dynamodb";
import { INoSqlDatabaseClient } from "./nosql/types";
import { IRelationalDatabaseClient } from "./relational";

/**
 * @public
 */
export interface IDatabaseService {
  insert(data: IDatabaseServiceInsertParams): Promise<void>;
  delete(params: IDatabaseServiceDeleteParams): Promise<void>;
  update(params: IDatabaseServiceUpdateParams): Promise<any>;
}

/**
 * @public
 */
export interface IDatabaseServiceConstructorParams {
  client: IDatabaseClient;
  databaseType: "Relational" | "Nosql";
}

/**
 * @public
 */
export interface ICreateDatabaseParams extends IRegion {}

/**
 * @public
 */
export interface IDatabaseServiceInsertParams {
  tableName: string;
  data: any;
}

/**
 * @public
 */
export interface IDatabaseServiceFindOneByIdParams {
  tableName: string;
  id: string;
}

/**
 * @public
 */
export interface IDatabaseServiceFindOneByAttributesParams {
  tableName: string;
  attributes: {
    [key: string]: string;
  };
}

/**
 * @public
 */
export interface IDatabaseServiceDeleteParams {
  tableName: string;
  id: string;
}

/**
 * @public
 */
export interface IDatabaseServiceUpdateParams {
  tableName: string;
  id: string;
  data: {
    [key: string]: string;
  };
}

/** Client */
export interface IDatabaseClient
  extends INoSqlDatabaseClient,
    IRelationalDatabaseClient {}
