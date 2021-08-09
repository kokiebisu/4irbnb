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
  id: string;
}

/**
 * @public
 */
export interface INoSqlDatabaseServiceFindByRangeParams {
  attribute: {
    name: string;
  };
  range: {
    start: string;
    end: string;
  };
}

/**
 * @public
 */
export interface INoSqlDatabaseServiceFindByKeyParams {
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
  id: string;
}

/**
 * @public
 */
export interface INoSqlDatabaseClientQueryParams {
  tableName: string;
  filter: any;
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
