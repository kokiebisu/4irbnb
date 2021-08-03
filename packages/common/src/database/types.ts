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
export interface IDatabaseServiceFindOneParams
  extends IWithIdentifierParams,
    IWithTableNameParams {}

/**
 * @public
 */
export interface IDatabaseServiceFindManyParams extends IWithFilterParams {}

/**
 * @public
 */
export interface IDatabaseServiceDeleteParams
  extends IWithIdentifierParams,
    IWithTableNameParams {}

/**
 * @public
 */
export interface IDatabaseServiceUpdateParams
  extends IWithIdentifierParams,
    IWithDataParams,
    IWithTableNameParams {}

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
