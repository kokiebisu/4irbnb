import { ServiceEnum, TEnvironment } from "@nextbnb/common";
import { Logger } from "@nextbnb/utils";
import { AWSServiceEnum } from "./enum";

export abstract class AWSService {
  environment: TEnvironment;
  serviceName?: ServiceEnum;
  logger: Logger;

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
