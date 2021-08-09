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
  get(params: IDatabaseClientGetParams): Promise<any | null>;
  query(params: IDatabaseClientQueryParams): Promise<any | null>;
  put(params: IDatabaseClientPutParams): Promise<void>;
  delete(params: IDatabaseClientDeleteParams): Promise<void>;
  update(params: IDatabaseClientUpdateParams): Promise<void>;
}

/**
 * @public
 */
export interface IDynamoDBConstructorParams extends IRegion {}

/**
 * @public
 */
export interface IDatabaseClientGetParams {
  tableName: string;
  id: string;
}

/**
 * @public
 */
export interface IDatabaseClientQueryParams {
  tableName: string;
  filter: any;
}

/**
 * @public
 */
export interface IDatabaseClientPutParams {
  tableName: string;
  data: any;
}

/**
 * @public
 */
export interface IDatabaseClientDeleteParams {
  tableName: string;
  id: string;
}

/**
 * @public
 */
export interface IDatabaseClientUpdateParams {
  tableName: string;
  id: string;
  data: any;
}

/**
 * @public
 */
export interface IWithIdentifierParams {
  identifier: string;
}
