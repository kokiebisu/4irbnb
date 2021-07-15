import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
import { Logger } from "@nextbnb/utils";
import { AWSServiceEnum } from ".";
import { S3, SNS, SQS, SSM, STS } from ".";

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
