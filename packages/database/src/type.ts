export interface IDatabaseService {
  insert(data: IServiceInsertParams): Promise<void>;
  findOne(params: IServiceFindOneParams): Promise<any>;
  findMany(params: IServiceFindManyParams): Promise<any>;
  delete(params: IServiceDeleteParams): Promise<void>;
  update(params: IServiceUpdateParams): Promise<void>;
}

export interface IServiceConstructorParams {
  client: IDatabaseService;
}

export interface IServiceInsertParams extends IWithDataParams {}

export interface IServiceFindOneParams extends IWithIdentiferParams {}

export interface IServiceFindManyParams extends IWithFilterParams {}

export interface IServiceDeleteParams extends IWithIdentiferParams {}

export interface IServiceUpdateParams
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
