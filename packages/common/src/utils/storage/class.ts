import { IStorageService } from ".";
import { IStorageClient } from "..";
import { S3Client } from "./s3";
import {
  IStorageServiceConstructorProps,
  IStorageServiceInitializeProps,
  IStorageServiceRemoveProps,
  IStorageServiceRetrieveProps,
  IStorageServiceStoreProps,
} from "./types";

export class StorageService implements IStorageService {
  #client: IStorageClient;

  private constructor({ client }: IStorageServiceConstructorProps) {
    this.#client = client;
  }

  public static initialize({
    region,
    storageName,
  }: IStorageServiceInitializeProps) {
    return new StorageService({
      client: S3Client.initialize({ region, storageName }),
    });
  }

  /**
   * @public
   * Stores the provided data to the storage
   */
  public async store({ key, value }: IStorageServiceStoreProps) {
    await this.#client.store({ key, value });
  }

  /**
   * @public
   * Retrieves the data from the provided storage name
   * @param Props
   */
  public async retrieve({ key }: IStorageServiceRetrieveProps) {
    return this.#client.retrieve({ key });
  }

  /**
   * @public
   * Removes the data from the provided storage
   * @param Props
   */
  public async remove({ key }: IStorageServiceRemoveProps) {
    await this.#client.remove({ key });
  }
}
