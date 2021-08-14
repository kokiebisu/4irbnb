import { TRegion } from "../..";

// SERVICE
export interface IStorageService {
  store({ key, value }: IStorageServiceStoreProps): Promise<void>;
  retrieve({ key }: IStorageServiceRetrieveProps): Promise<any>;
  remove({ key }: IStorageServiceRemoveProps): Promise<void>;
}

/**
 * @public
 */
export interface IStorageServiceConstructorProps {
  client: IStorageClient;
}

/**
 * @public
 */
export interface IStorageServiceCreateProps {
  region: TRegion;
  storageName: string;
}

/**
 * @public
 */
export interface IStorageServiceStoreProps {
  key: string;
  value: any;
}

/**
 * @public
 */
export interface IStorageServiceRetrieveProps {
  key: string;
}

/**
 * @public
 */
export interface IStorageServiceRemoveProps {
  key: string;
}

// CLIENT
export interface IStorageClient {
  store(params: IStorageClientStoreProps): Promise<void>;
  retrieve(params: IStorageClientRetrieveProps): Promise<any>;
  remove(params: IStorageClientRemoveProps): Promise<void>;
}

/**
 * @public
 */
export interface IStorageClientConstructorProps {
  region: TRegion;
  storageName: string;
}

/**
 * @public
 */
export interface IStorageClientCreateProps {
  region: TRegion;
  storageName: string;
}

/**
 * @public
 */
export interface IStorageClientStoreProps {
  key: string;
  value: any;
}

/**
 * @public
 */
export interface IStorageClientRetrieveProps {
  key: string;
}

/**
 * @public
 */
export interface IStorageClientRemoveProps {
  key: string;
}
