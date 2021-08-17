/** SERVICE */

import { TRegion } from "@4irbnb/common";

/**
 * @public
 */
export interface IRelationalDatabaseService {
  findByAttributes(
    params: IRelationalDatabaseServiceFindByAttributesProps
  ): Promise<any | null>;
  findAllByAttributes(
    params: IRelationalDatabaseServiceFindAllByAttributesProps
  ): Promise<any[] | null>;
}

/**
 * @public
 */
export interface IRelationalDatabaseServiceConstructorParams {
  client: IRelationalDatabaseClient;
  tableName: string;
}

/**
 * @public
 */
export interface IRelationalDatabaseServiceFindByAttributesProps {
  attributes: {
    [key: string]: any;
  };
}

/**
 * @public
 */
export interface IRelationalDatabaseServiceFindAllByAttributesProps {
  attributes: {
    [key: string]: any;
  };
}

/**
 * @public
 */
export interface IRelationalDatabaseServiceFindByIdParams {
  tableName: string;
  id: string;
}

export interface IRelationalDatabaseServiceInitializeProps {
  region: TRegion;
  tableName: string;
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
  data: any;
}

export interface IRelationalDatabaseServiceUpdateProps {
  id: any;
  data: any;
}

export interface IRelationalDatabaseServiceCreateProps<T> {
  data: T;
}

export interface IRelationalDatabaseServiceDeleteProps {
  id: any;
}
