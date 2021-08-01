import {
  S3Client,
  CreateBucketCommand,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  DeleteBucketCommand,
  GetBucketLocationCommand,
} from "@aws-sdk/client-s3";
import { PackageEnum } from "../../enum";
import { ILoggerService, createLogger } from "../../utils";

import {
  IStorageService,
  IStorageServiceCreateStorageParams,
  IStorageServiceDeleteStorageParams,
  IStorageServiceRemoveParams,
  IStorageServiceRetrieveParams,
  IStorageServiceRetrieveStorageParams,
  IStorageServiceStoreParams,
} from "../types";
import { IS3ConstructorParams } from "./types";

export class S3 implements IStorageService {
  #client: S3Client;
  #logger: ILoggerService;

  constructor({ region }: IS3ConstructorParams) {
    this.#logger = createLogger({
      packageName: PackageEnum.common,
      className: "S3",
    });
    this.#client = new S3Client({ region });
  }

  /**
   * @public
   */
  async createStorage({ storageName }: IStorageServiceCreateStorageParams) {
    try {
      await this.#client.send(
        new CreateBucketCommand({
          Bucket: storageName,
        })
      );
    } catch (error) {
      this.#logger.error({
        location: "create:send",
        message: error as string,
      });
    }
  }

  /**
   * @public
   * Checks if the bucket exists
   * @param param0
   */
  async validateStorage({ storageName }: IStorageServiceRetrieveStorageParams) {
    try {
      const config = await this.#client.send(
        new GetBucketLocationCommand({
          Bucket: storageName,
        })
      );
      return !!config;
    } catch (error) {
      this.#logger.error({
        location: "retrieveStorage:send",
        message: error as string,
      });
      return false;
    }
  }

  /**
   * @public
   */
  async deleteStorage({ storageName }: IStorageServiceDeleteStorageParams) {
    try {
      await this.#client.send(
        new DeleteBucketCommand({
          Bucket: storageName,
        })
      );
    } catch (error) {
      this.#logger.error({
        location: "delete:send",
        message: error as string,
      });
    }
  }

  /**
   * @public
   */
  async store({ storageName, key, data }: IStorageServiceStoreParams) {
    try {
      await this.#client.send(
        new PutObjectCommand({
          Bucket: storageName,
          Key: key,
          Body: data,
        })
      );
    } catch (error) {
      this.#logger.error({
        location: "store:send",
        message: error as string,
      });
    }
  }

  /**
   * @public
   */
  async retrieve({ storageName, key }: IStorageServiceRetrieveParams) {
    try {
      return await this.#client.send(
        new GetObjectCommand({
          Bucket: storageName,
          Key: key,
        })
      );
    } catch (error) {
      this.#logger.error({
        location: "retrieve:send",
        message: error as string,
      });
      return null;
    }
  }

  /**
   * @public
   */
  async remove({ storageName, key }: IStorageServiceRemoveParams) {
    try {
      await this.#client.send(
        new DeleteObjectCommand({
          Bucket: storageName,
          Key: key,
        })
      );
    } catch (error) {
      this.#logger.error({
        location: "remove:send",
        message: error as string,
      });
    }
  }
}
