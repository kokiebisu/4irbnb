import {
  GetSubscriptionAttributesCommand,
  SNSClient,
  SubscribeCommand,
} from "@aws-sdk/client-sns";
import { ServiceEnum, TEnvironment } from "@nextbnb/common";
import { AWSServiceEnum } from "../..";
import { AWSService } from "../../class";

export class SNSSubscriber extends AWSService {
  service: SNSClient;
  serviceName: ServiceEnum;
  topicName: string;
  private subscriptionArn: string | undefined;

  /**
   *
   * @param region
   * @param environment
   */
  constructor(
    serviceName: ServiceEnum,
    region: string,
    environment: TEnvironment,
    topicName: string
  ) {
    super(serviceName, AWSServiceEnum.sns, environment);
    this.service = new SNSClient({ region });
    this.serviceName = serviceName;
    this.topicName = topicName;
  }

  /**
   * @public
   * Subscribes to the given topic name passed on the instantiation
   */
  async registerSubscription(): Promise<void> {
    // Fetch topic arn from SSM
    const topicArn = "safioj"; // to be changed

    const { SubscriptionArn } = await this.service.send(
      new SubscribeCommand({
        Attributes: undefined,
        Protocol: "sqs",
        TopicArn: topicArn,
      })
    );
    this.subscriptionArn = SubscriptionArn;
  }

  /**
   * @public
   * Retrieves the subscription information
   */
  async getSubscriptionAttribute() {
    return (
      await this.service.send(
        new GetSubscriptionAttributesCommand({
          SubscriptionArn: this.subscriptionArn,
        })
      )
    ).Attributes;
  }
}
