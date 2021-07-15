import { SQSClient } from "@aws-sdk/client-sqs";
import { ServiceEnum, TEnvironment } from "@nextbnb/common";
import { AWSService } from "../class";
import { AWSServiceEnum } from "../enum";

export class SQS extends AWSService {
  #service: SQSClient;
  #serviceName: ServiceEnum;
  #region: string;
  #topicArn: string | undefined;

  /**
   * @public
   * Constructs the SQS instance
   *
   * @param serviceName
   * @param region
   * @param environment
   */
  constructor(
    serviceName: ServiceEnum,
    region: string,
    environment: TEnvironment
  ) {
    super(serviceName, AWSServiceEnum.sqs, environment);
    this.#service = new SQSClient({ region });
    this.#serviceName = serviceName;
    this.#region = region;
  }
}
