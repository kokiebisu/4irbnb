import {
  GetSubscriptionAttributesCommand,
  SubscribeCommand,
} from "@aws-sdk/client-sns";
import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
import { createAWSService } from "../../factory";
import { SSM } from "../../ssm/class";
import { SNS } from "../class";
import { SSMCreator } from "../creator";

export class Subscriber extends SNS {
  #subscriptionARN: { [topic: string]: string };

  constructor(
    serviceName: ServiceEnum,
    region: TRegion,
    environment: TEnvironment
  ) {
    super(serviceName, region, environment);
    this.#subscriptionARN = {};
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
    const client = createAWSService(
      new SSMCreator(),
      this.serviceName,
      this.region,
      this.environment,
      null
    ) as SSM;
    const topicArn = await client.getServiceSecret(topicName);

    const { SubscriptionArn } = await this.service.send(
      new SubscribeCommand({
        Attributes: undefined,
        Protocol: protocol,
        TopicArn: topicArn,
        Endpoint: endpoint,
      })
    );
    if (SubscriptionArn) {
      this.#subscriptionARN[topicName] = SubscriptionArn;
    } else {
      throw new Error("Subscription ARN creation was not successful");
    }
  }

  /**
   * @public
   * Retrieves the subscription information
   */
  async getSubscriptionAttribute(topicName: string) {
    return (
      await this.service.send(
        new GetSubscriptionAttributesCommand({
          SubscriptionArn: this.#subscriptionARN[topicName],
        })
      )
    ).Attributes;
  }
}
