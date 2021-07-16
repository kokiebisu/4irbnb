import { SNSClient } from "@aws-sdk/client-sns";
import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
import { AWSServiceEnum } from "..";
import { AWSService } from "../class";

/**
 * @public
 * Blueprint
 */
export class SNS extends AWSService {
  protected service: SNSClient;
  protected region: TRegion;

  /**
   * Constructs
   * @param region
   * @param environment
   */
  constructor(
    serviceName: ServiceEnum,
    region: TRegion,
    environment: TEnvironment
  ) {
    super(serviceName, AWSServiceEnum.sns, environment);
    this.service = new SNSClient({ region });
    this.serviceName = serviceName;
    this.region = region;
  }
}
