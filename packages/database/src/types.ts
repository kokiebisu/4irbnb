/**
 * @public
 */
export interface IDatabaseService<T> {
  create(params: IDatabaseServiceCreateProps<T>): Promise<void>;
  read(params: IDatabaseServiceReadProps): Promise<T | null>;
  delete(params: IDatabaseServiceDeleteParams): Promise<void>;
  update(params: IDatabaseServiceUpdateParams): Promise<void>;
}

export interface RepositoryConstructorProps<T> {
  db: IDatabaseService<T>;
}

export interface DatabaseCommonArgs {
  type: string;
}

/**
 * @public
 */
export interface IDatabaseServiceCreateProps<T> {
  type: string;
  data: T;
}

/**
 * @public
 */
export interface IDatabaseServiceReadProps {
  type: string;
  id: string;
}

/**
 * @public
 */
export interface IDatabaseServiceDeleteParams {
  type: string;
  id: string;
}

/**
 * @public
 */
export interface IDatabaseServiceUpdateParams {
  type: string;
  id: string;
}

// /** Client */
// export interface IDatabaseClient extends INoSqlDatabaseClient {}
