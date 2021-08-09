/** SERVICE */

/**
 * @public
 */
export interface INoSqlDatabaseService {
  findById(params: INoSqlDatabaseServiceFindByIdParams): Promise<any | null>;
  findByRange(
    params: INoSqlDatabaseServiceFindByRangeParams
  ): Promise<any | null>;
  findByKey(params: INoSqlDatabaseServiceFindByKeyParams): Promise<any | null>;
}

/**
 * @public
 */
export interface INoSqlDatabaseServiceConstructorParams {
  client: INoSqlDatabaseClient;
}

/**
 * @public
 */
export interface INoSqlDatabaseServiceFindByIdParams {
  tableName: string;
  id: string;
}

/**
 * @public
 */
export interface INoSqlDatabaseServiceFindByRangeParams {
  tableName: string;
  attribute: string;
  range: {
    start: any;
    end: any;
  };
}

/**
 * @public
 */
export interface INoSqlDatabaseServiceFindByKeyParams {
  tableName: string;
  attributes: {
    [key: string]: any;
  };
}

/** CLIENT */

/**
 * @public
 */
export interface INoSqlDatabaseClient {
  get(params: INoSqlDatabaseClientGetParams): Promise<any | null>;
  query(params: INoSqlDatabaseClientQueryParams): Promise<any | null>;
  put(params: INoSqlDatabaseClientPutParams): Promise<void>;
  delete(params: INoSqlDatabaseClientDeleteParams): Promise<void>;
  update(params: INoSqlDatabaseClientUpdateParams): Promise<void>;
}

/**
 * @public
 */
export interface INoSqlDatabaseClientGetParams {
  tableName: string;
  id?: string;
  attributes?: {
    [key: string]: any;
  };
}

/**
 * @public
 */
export interface INoSqlDatabaseClientQueryParams {
  tableName: string;
  attribute: string;
  range: {
    start: any;
    end: any;
  };
}

/**
 * @public
 */
export interface INoSqlDatabaseClientPutParams {
  tableName: string;
  data: any;
}

/**
 * @public
 */
export interface INoSqlDatabaseClientDeleteParams {
  tableName: string;
  id: string;
}

/**
 * @public
 */
export interface INoSqlDatabaseClientUpdateParams {
  tableName: string;
  id: string;
  data: any;
}

/**
 * @public
 */
export interface INoSqlDatabaseClientPutParams {
  tableName: string;
  data: any;
}
