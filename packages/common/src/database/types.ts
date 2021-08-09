import { IRegion } from "../types";
import { IDatabaseClient } from "./dynamodb";

/**
 * @public
 */
export interface IDatabaseService {
  insert(data: IDatabaseServiceInsertParams): Promise<void>;
  findOne(params: IDatabaseServiceFindOneParams): Promise<any>;
  // findMany(params: IDatabaseServiceFindManyParams): Promise<any>;
  delete(params: IDatabaseServiceDeleteParams): Promise<void>;
  update(params: IDatabaseServiceUpdateParams): Promise<any>;
}

/**
 * @public
 */
export interface IDatabaseServiceConstructorParams {
  client: IDatabaseClient;
}

/**
 * @public
 */
export interface ICreateDatabaseParams extends IRegion {}

/**
 * @public
 */
export interface IDatabaseServiceInsertParams
  extends IWithDataParams,
    IWithTableNameParams {}

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
export interface IDatabaseServiceFindManyParams extends IWithFilterParams {}

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

/**
 * @public
 */
export interface IWithDataParams {
  data: any;
}

/**
 * @public
 */
export interface IWithIdentifierParams {
  identifier: {} | undefined;
}

/**
 * @public
 */
export interface IWithFilterParams {
  filter: any;
}

/**
 * @public
 */
export interface IWithTableNameParams {
  tableName: string;
}
