// SERVICE
export interface IStorageService {
  createStorage({
    storageName,
  }: IStorageServiceCreateStorageParams): Promise<void>;
  validateStorage({
    storageName,
  }: IStorageServiceCreateStorageParams): Promise<boolean>;
  deleteStorage({
    storageName,
  }: IStorageServiceDeleteStorageParams): Promise<void>;
  store({ storageName, data }: IStorageServiceStoreParams): Promise<void>;
  retrieve({ storageName }: IStorageServiceRetrieveParams): Promise<any>;
  remove({ storageName, key }: IStorageServiceRemoveParams): Promise<void>;
}

export interface IStorageServiceConstructorParams {
  service: IStorageService;
}

// PARAMS
export interface IStorageServiceCreateStorageParams
  extends IWithStorageNameParams {}

export interface IStorageServiceRetrieveStorageParams
  extends IWithStorageNameParams {}

export interface IStorageServiceDeleteStorageParams
  extends IWithStorageNameParams {}

export interface IStorageServiceStoreParams
  extends IWithStorageNameParams,
    IWithDataParams,
    IWithKeyParams {}

export interface IStorageServiceRetrieveParams
  extends IWithStorageNameParams,
    IWithKeyParams {}

export interface IStorageServiceRemoveParams
  extends IWithStorageNameParams,
    IWithKeyParams {}

// ATTACHMENT
export interface IWithStorageNameParams {
  storageName: string;
}

export interface IWithDataParams {
  data: any;
}

export interface IWithKeyParams {
  key: string;
}
