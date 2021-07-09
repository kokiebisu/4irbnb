import { SNSClient } from "@aws-sdk/client-sns";
import { ServiceEnum, TEnvironment } from "@nextbnb/common";
import { AWSService } from "../class";
import { AWSServiceEnum } from "../enum";

/**
 * @public
 */
export class SNS extends AWSService {
  service: SNSClient;

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
    super(serviceName, AWSServiceEnum.sns, environment);
    this.service = new SNSClient({ region });
  }
}
