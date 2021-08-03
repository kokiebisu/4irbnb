import { IRegion } from "../../types";
import {
  IDatabaseServiceDeleteParams,
  IDatabaseServiceFindOneParams,
  IDatabaseServiceInsertParams,
  IDatabaseServiceUpdateParams,
} from "../types";

/**
 * @public
 */
export interface IDatabaseClient {
  insert(data: IDatabaseClientInsertParams): Promise<void>;
  findOne(params: IDatabaseClientFindOneParams): Promise<any>;
  // findMany(params: IDatabaseServiceFindManyParams): Promise<any>;
  delete(params: IDatabaseClientDeleteParams): Promise<void>;
  update(params: IDatabaseClientUpdateParams): Promise<any>;
}

/**
 * @public
 */
export interface ICreateDynamoDB extends IRegion {}

/**
 * @public
 */
export interface IDynamoDBConstructorParams extends IRegion {}

/**
 * @public
 */
export interface IDynamoDBFindOneParams extends IWithIdentifierParams {}

/**
 * @public
 */
export interface IWithIdentifierParams {
  identifier: string;
}

/**
 * @public
 */
export interface IDatabaseClientInsertParams
  extends IDatabaseServiceInsertParams {}

/**
 * @public
 */
export interface IDatabaseClientFindOneParams
  extends IDatabaseServiceFindOneParams {}

/**
 * @public
 */
export interface IDatabaseClientDeleteParams
  extends IDatabaseServiceDeleteParams {}

/**
 * @public
 */
export interface IDatabaseClientUpdateParams
  extends IDatabaseServiceUpdateParams {}
