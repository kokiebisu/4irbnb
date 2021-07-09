import {
  S3Client,
  CreateBucketCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { ServiceEnum, TEnvironment } from "@nextbnb/common";
import { ApiError } from "@nextbnb/error";

/**
 * @public
 */
export class S3 {
  client: S3Client;
  serviceName: ServiceEnum;
  environment: TEnvironment;

  /**
   *
   * @param region
   * @param serviceName
   */
  constructor(
    serviceName: ServiceEnum,
    region: string,
    environment: TEnvironment
  ) {
    this.client = new S3Client({ region });
    this.serviceName = serviceName;
    this.environment = environment;
  }

  /**
   *
   * @param bucketName
   * @returns
   */
  public async createBucket(bucketName: string) {
    return await this.client.send(
      new CreateBucketCommand({ Bucket: bucketName })
    );
  }

  /**
   *
   * @param bucketName
   * @param name
   * @param data
   * @returns
   */
  public async storeObject(bucketName: string, name: string, data: any) {
    try {
      return await this.client.send(
        new PutObjectCommand({
          Bucket: `nextbnb/${this.serviceName}/${bucketName}`,
          Key: name,
          Body: data,
        })
      );
    } catch (err) {
      throw new ApiError(`AWS ${this.serviceName}`);
    }
  }
}
