import {
  CreateTopicCommand,
  GetTopicAttributesCommand,
  SNSClient,
} from "@aws-sdk/client-sns";
import { ServiceEnum, TEnvironment } from "@nextbnb/common";
import { AWSService } from "../../class";
import { AWSServiceEnum } from "../../enum";

/**
 * @public
 */
export class SNS extends AWSService {
  service: SNSClient;
  serviceName: ServiceEnum;
  private topicArn: string | undefined;

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
    this.serviceName = serviceName;
  }

  /**
   * @public
   * Creates the topic with service name as the topic name.
   *
   * @remarks
   * An instance of a SNS Client can only hold one topic.
   * If you want to replace the current registered topic, you must remove it using
   * ```ts
   * deregisterTopic()
   * ```
   */
  async registerTopic(): Promise<void> {
    if (this.topicArn) {
      throw new Error(
        "Topic Arn is already set. Remove the topic before registering new one"
      );
    }
    const { TopicArn } = await this.service.send(
      new CreateTopicCommand({
        Attributes: {
          DisplayName: `${this.serviceName}`,
          FifoTopic: "false",
        },
        Name: `${this.serviceName}`,
      })
    );
    this.topicArn = TopicArn;
    3;

    // Must save the topic Arn to SSM so that it can be retrieved by Subscribers
  }

  /**
   * @public
   * Retrieves the attribute information for the instances topic
   *
   * @returns a promise which resolves to an object of type GetTopicAttributesCommand
   */
  async getTopicAttribute(): Promise<{ [key: string]: string } | undefined> {
    return (
      await this.service.send(
        new GetTopicAttributesCommand({ TopicArn: this.topicArn })
      )
    ).Attributes;
  }

  /**
   * Sends a message to the registerd topic
   */
  async publish() {}
}
