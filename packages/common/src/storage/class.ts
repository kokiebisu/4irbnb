import {
  IStorageService,
  IStorageServiceConstructorParams,
  IStorageServiceCreateParams,
  IStorageServiceRemoveParams,
  IStorageServiceRetrieveParams,
  IStorageServiceStoreParams,
} from "./types";

export class StorageService {
  #service: IStorageService;

  constructor({ service }: IStorageServiceConstructorParams) {
    this.#service = service;
  }

  /**
   * @public
   * Creates storage
   */
  create({ storageName }: IStorageServiceCreateParams) {
    this.#service.create({ storageName });
  }

  /**
   * @public
   * Stores the provided data to the storage
   */
  store({ storageName, data, key }: IStorageServiceStoreParams) {
    this.#service.store({ storageName, key, data });
  }

  /**
   * @public
   * Retrieves the data from the provided storage name
   * @param params
   */
  retrieve({ storageName, key }: IStorageServiceRetrieveParams) {
    this.#service.retrieve({ storageName, key });
  }

  /**
   * @public
   * Removes the data from the provided storage
   * @param params
   */
  remove({ storageName, key }: IStorageServiceRemoveParams) {
    this.#service.remove({ storageName, key });
  }
}
