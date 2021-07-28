import { AttributeValue } from "@aws-sdk/client-dynamodb";
import { IRegion } from "@nextbnb/common";

export interface IDatabaseService {
  insert(data: IDatabaseServiceInsertParams): Promise<void>;
  findOne(params: IDatabaseServiceFindOneParams): Promise<any>;
  // findMany(params: IDatabaseServiceFindManyParams): Promise<any>;
  delete(params: IDatabaseServiceDeleteParams): Promise<void>;
  // update(params: IDatabaseServiceUpdateParams): Promise<void>;
}

/**
 * @public
 */
export interface IDatabaseServiceConstructorParams {
  client: IDatabaseService;
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
    IWithDataParams {}

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
  identifier: IDataIdentifier;
}

/**
 * @public
 */
export interface IDataIdentifier {
  [key: string]: AttributeValue;
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
