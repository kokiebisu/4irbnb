import { ServiceEnum, TEnvironment } from "@nextbnb/common";
import { SSM } from "./ssm";
import { SNS } from "./sns";
import { S3 } from "./s3";
import { AWSServiceEnum } from "./enum";

export const AWSServiceFactory = (
  serviceName: ServiceEnum,
  awsServiceName: AWSServiceEnum,
  region: string,
  environment: TEnvironment
) => {
  switch (awsServiceName) {
    case AWSServiceEnum.ssm:
      return new SSM(serviceName, region, environment);
    case AWSServiceEnum.sns:
      return new SNS(serviceName, region, environment);
    case AWSServiceEnum.s3:
      return new S3(serviceName, region, environment);
    default:
      throw new Error(
        `[@nextbnb/error] AWS Service ${awsServiceName} was not found`
      );
  }
};
