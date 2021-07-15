import {
  S3Client,
  CreateBucketCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
import { ApiError } from "@nextbnb/error";
import { AWSService } from "../class";
import { AWSServiceEnum } from "../enum";

/**
 * @public
 * Blueprint of the class which enables performing S3 Service actions
 */
export class S3 extends AWSService {
  client: S3Client;

  /**
   *
   * @param region
   * @param serviceName
   */
  constructor(
    serviceName: ServiceEnum,
    region: TRegion,
    environment: TEnvironment
  ) {
    super(serviceName, AWSServiceEnum.s3, environment);
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
