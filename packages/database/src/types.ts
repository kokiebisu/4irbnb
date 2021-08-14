/**
 * @public
 */
export interface IDatabaseService {
  create(params: IDatabaseServiceCreateProps): Promise<void>;
  findById(params: IDatabaseServiceReadProps): Promise<any>;
  delete(params: IDatabaseServiceDeleteParams): Promise<void>;
  update(params: IDatabaseServiceUpdateParams): Promise<void>;
}

export interface IDatabaseServiceConstructorProps<T> {
  client: IDatabaseClient<T>;
}

export interface DatabaseCommonArgs {
  tableName: string;
}

/**
 * @public
 */
export interface IDatabaseServiceCreateProps {
  tableName: string;
  data: any;
}

/**
 * @public
 */
export interface IDatabaseServiceReadProps {
  tableName: string;
  id: string;
}

/**
 * @public
 */
export interface IDatabaseServiceDeleteProps {
  tableName: string;
  id: string;
}

/**
 * @public
 */
export interface IDatabaseServiceUpdateProps {
  tableName: string;
  id: string;
  data: any;
}

// /** Client */
export interface IDatabaseClient<T> {
  find(args: any): Promise<T | null>;
  create(args: any): Promise<void>;
  delete(args: any): Promise<void>;
  update(args: any): Promise<void>;
}
