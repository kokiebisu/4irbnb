import {
  GetSubscriptionAttributesCommand,
  SNSClient,
  SubscribeCommand,
} from "@aws-sdk/client-sns";
import { ServiceEnum, TEnvironment } from "@nextbnb/common";
import { AWSServiceEnum } from "../..";
import { AWSService } from "../../class";
import { createSSMService } from "../../ssm";

export class SNSSubscriber extends AWSService {
  service: SNSClient;
  serviceName: ServiceEnum;
  #region: string;
  #subscriptionArn: string | undefined;

  /**
   *
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
    this.#region = region;
  }

  /**
   * @public
   * Subscribes to the given topic name passed on the instantiation
   *
   * @param topicName
   * @param protocol
   */
  async registerSubscription(
    topicName: string,
    protocol: "sqs",
    endpoint: string
  ): Promise<void> {
    const client = createSSMService(
      this.serviceName,
      this.#region,
      this.environment
    );
    const topicArn = await client.getServiceSecret(topicName);

    const { SubscriptionArn } = await this.service.send(
      new SubscribeCommand({
        Attributes: undefined,
        Protocol: protocol,
        TopicArn: topicArn,
        Endpoint: endpoint,
      })
    );
    this.#subscriptionArn = SubscriptionArn;
  }

  /**
   * @public
   * Retrieves the subscription information
   */
  async getSubscriptionAttribute() {
    return (
      await this.service.send(
        new GetSubscriptionAttributesCommand({
          SubscriptionArn: this.#subscriptionArn,
        })
      )
    ).Attributes;
  }
}
