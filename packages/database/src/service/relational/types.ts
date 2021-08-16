/** SERVICE */

/**
 * @public
 */
export interface IRelationalDatabaseService {
  findByAttribute(
    params: IRelationalDatabaseServiceFindByIdParams
  ): Promise<any | null>;
}

/**
 * @public
 */
export interface IRelationalDatabaseServiceConstructorParams {
  client: IRelationalDatabaseClient;
}

/**
 * @public
 */
export interface IRelationalDatabaseServiceFindByIdParams {
  tableName: string;
  id: string;
}

/**
 * @public
 */
export interface IRelationalDatabaseServiceFindByRangeParams {
  tableName: string;
  attributes: {
    [key: string]: any;
  };
  range: {
    start: any;
    end: any;
  };
}

/**
 * @public
 */
export interface IRelationalDatabaseServiceFindByKeyParams {
  tableName: string;
  attributes: {
    [key: string]: any;
  };
}

/** CLIENT */

/**
 * @public
 */
export interface IRelationalDatabaseClient {
  execute(params: IRelationalDatabaseClientExecuteProps): Promise<any | null>;
  batchExecute(
    params: IRelationalDatabaseClientBatchExecuteProps
  ): Promise<any | null>;
}

export interface IRelationalDatabaseClientConstructorProps {
  region: string;
  resourceArn: string;
  databaseName: string;
  secretArn: string;
}

export interface IRelationalDatabaseClientExecuteProps {
  sql: string;
}

export interface IRelationalDatabaseClientBatchExecuteProps {
  sql: string;
}

/**
 * @public
 */
export interface IRelationalDatabaseClientPutParams {
  tableName: string;
  data: any;
}

export interface IRelationalDatabaseServiceUpdateProps {
  tableName: string;
  id: any;
  data: any;
}

export interface IRelationalDatabaseServiceCreateProps {
  tableName: string;
  data: any;
}

export interface IRelationalDatabaseServiceDeleteProps {
  tableName: string;
  id: any;
}
