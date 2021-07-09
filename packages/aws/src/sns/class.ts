import { SNSClient } from "@aws-sdk/client-sns";
import { ServiceEnum, TEnvironment } from "@nextbnb/common";

/**
 * @public
 */
export class SNS {
  serviceName: ServiceEnum;
  service: SNSClient;
  environment: TEnvironment;

  /**
   *
   * @param region
   * @param environment
   */
  constructor(
    serviceName: ServiceEnum,
    region: string,
    environment: TEnvironment
  ) {
    this.serviceName = serviceName;
    this.service = new SNSClient({ region });
    this.environment = environment;
  }
}
