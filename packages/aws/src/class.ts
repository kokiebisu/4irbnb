import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
import { Logger } from "@nextbnb/utils";
import { AWSServiceEnum } from "./enum";
import { S3 } from "./s3/class";
import { SNS } from "./sns/class";
import { SQS } from "./sqs/class";
import { SSM } from "./ssm/class";
import { STS } from "./sts/class";

export class AWSService {
  protected environment: TEnvironment;
  protected serviceName: ServiceEnum;
  protected logger: Logger;

  constructor(
    serviceName: ServiceEnum,
    awsServiceName: AWSServiceEnum,
    environment: TEnvironment
  ) {
    this.serviceName = serviceName;
    this.environment = environment;
    this.logger = new Logger(awsServiceName, "info", "1111", "development");
  }
}

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
