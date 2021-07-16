import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";

import { S3 } from "./s3";
import { SNS } from "./sns";
import { SQS } from "./sqs";
import { SSM } from "./ssm";
import { STS } from "./sts";

export abstract class AWSServiceCreator {
  /**
   * @public
   * Creates the AWS Service Instance
   */
  public abstract create(
    serviceName: ServiceEnum,
    region: TRegion,
    environment: TEnvironment,
    variant?: any
  ): S3 | SNS | SQS | SSM | STS;
}
