import { S3Client } from "@aws-sdk/client-s3";

export class S3 {
  service: S3Client;
  constructor({ region }) {
    this.service = new S3Client({ region });
  }
}
