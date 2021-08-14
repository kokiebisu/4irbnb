import {
  S3Client as Client,
  CreateBucketCommand,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  GetBucketLocationCommand,
} from "@aws-sdk/client-s3";
import { PackageEnum } from "../../../enum";
import {
  IStorageClientCreateProps,
  IStorageClientRemoveProps,
  IStorageClientRetrieveProps,
  IStorageClientStoreProps,
  ILoggerService,
  IStorageClient,
  IStorageClientConstructorProps,
} from "../..";

import { LoggerService } from "../../logger/class";
import { InternalError } from "../../..";

export class S3Client implements IStorageClient {
  #client: Client;
  #logger: ILoggerService;
  #storageName: string;

  private constructor({ region, storageName }: IStorageClientConstructorProps) {
    this.#logger = LoggerService.create({
      packageName: PackageEnum.common,
      className: "S3Client",
    });
    this.#client = new Client({ region });
    this.#storageName = storageName;
  }

  public static create({ region, storageName }: IStorageClientCreateProps) {
    return new S3Client({ region, storageName });
  }

  /**
   * @public
   */
  private async createStorage() {
    try {
      await this.#client.send(
        new CreateBucketCommand({
          Bucket: this.#storageName,
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
  private async validateStorage() {
    try {
      const config = await this.#client.send(
        new GetBucketLocationCommand({
          Bucket: this.#storageName,
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
  async store({ key, value }: IStorageClientStoreProps) {
    const storageExists = await this.validateStorage();
    if (!storageExists) {
      await this.createStorage();
    }
    try {
      await this.#client.send(
        new PutObjectCommand({
          Bucket: this.#storageName,
          Key: key,
          Body: value,
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
  public async retrieve({ key }: IStorageClientRetrieveProps) {
    const storageExists = await this.validateStorage();
    try {
      if (!storageExists) {
        throw new InternalError({
          location: "retrieve:{!storageExists}",
          message: "Storage doesn't exist",
        });
      }
      return await this.#client.send(
        new GetObjectCommand({
          Bucket: this.#storageName,
          Key: key,
        })
      );
    } catch (error: any) {
      if (error instanceof InternalError) {
        this.#logger.error(error);
      } else {
        this.#logger.error({
          location: "retrieve:send",
          message: error,
        });
      }
      return null;
    }
  }

  /**
   * @public
   */
  async remove({ key }: IStorageClientRemoveProps) {
    try {
      const storageExists = await this.validateStorage();
      if (!storageExists) {
        throw new InternalError({
          location: "remove:{!storageExists}",
          message: "Storage doesn't exist",
        });
      }
      await this.#client.send(
        new DeleteObjectCommand({
          Bucket: this.#storageName,
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
