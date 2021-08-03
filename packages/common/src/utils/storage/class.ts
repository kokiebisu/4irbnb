import {
  IStorageService,
  IStorageServiceConstructorParams,
  IStorageServiceCreateStorageParams,
  IStorageServiceDeleteStorageParams,
  IStorageServiceRemoveParams,
  IStorageServiceRetrieveParams,
  IStorageServiceRetrieveStorageParams,
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
  async createStorage({ storageName }: IStorageServiceCreateStorageParams) {
    await this.#service.createStorage({ storageName });
  }

  /**
   * @public
   * Retrieve storage
   * @param param0
   */
  async validateStorage({ storageName }: IStorageServiceRetrieveStorageParams) {
    return await this.#service.validateStorage({ storageName });
  }

  /**
   * @public
   * Delets storage
   */
  async deleteStorage({ storageName }: IStorageServiceDeleteStorageParams) {
    await this.#service.deleteStorage({ storageName });
  }

  /**
   * @public
   * Stores the provided data to the storage
   */
  async store({ storageName, data, key }: IStorageServiceStoreParams) {
    await this.#service.store({ storageName, key, data });
  }

  /**
   * @public
   * Retrieves the data from the provided storage name
   * @param params
   */
  async retrieve({ storageName, key }: IStorageServiceRetrieveParams) {
    return this.#service.retrieve({ storageName, key });
  }

  /**
   * @public
   * Removes the data from the provided storage
   * @param params
   */
  async remove({ storageName, key }: IStorageServiceRemoveParams) {
    await this.#service.remove({ storageName, key });
  }
}
