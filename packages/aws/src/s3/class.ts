import {
  S3Client,
  CreateBucketCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { ServiceEnum } from "@nextbnb/common";
import { ApiError } from "@nextbnb/error";

export class S3 {
  client: S3Client;
  serviceName: ServiceEnum;

  constructor({ region, serviceName }) {
    this.client = new S3Client({ region });
    this.serviceName = serviceName;
  }

  public async createBucket({ bucketName }) {
    return await this.client.send(
      new CreateBucketCommand({ Bucket: bucketName })
    );
  }

  public async storeObject({ bucketName, name, data }) {
    try {
      return await this.client.send(
        new PutObjectCommand({
          Bucket: `nextbnb/${this.serviceName}/${bucketName}`,
          Key: name,
          Body: data,
        })
      );
    } catch (err) {
      throw new ApiError({ serviceName: `AWS ${this.serviceName}` });
    }
  }
}
