export interface IDatabaseService {
  insert(data: IDatabaseServiceInsertParams): Promise<void>;
  findOne(params: IDatabaseServiceFindOneParams): Promise<any>;
  findMany(params: IDatabaseServiceFindManyParams): Promise<any>;
  delete(params: IDatabaseServiceDeleteParams): Promise<void>;
  update(params: IDatabaseServiceUpdateParams): Promise<void>;
}

export interface IDatabaseServiceConstructorParams {
  client: IDatabaseService;
}

export interface IDatabaseServiceInsertParams extends IWithDataParams {}

export interface IDatabaseServiceFindOneParams extends IWithIdentiferParams {}

export interface IDatabaseServiceFindManyParams extends IWithFilterParams {}

export interface IDatabaseServiceDeleteParams extends IWithIdentiferParams {}

export interface IDatabaseServiceUpdateParams
  extends IWithIdentiferParams,
    IWithDataParams {}

export interface IWithDataParams {
  data: any;
}

export interface IWithIdentiferParams {
  identifier: string;
}

export interface IWithFilterParams {
  filter: any;
}
