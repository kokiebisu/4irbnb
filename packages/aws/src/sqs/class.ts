import { AddPermissionCommand } from "@aws-sdk/client-sqs";
import { SQSClient } from "@aws-sdk/client-sqs";
import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
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
    region: TRegion,
    environment: TEnvironment
  ) {
    super(serviceName, AWSServiceEnum.sqs, environment);
    this.#service = new SQSClient({ region });
    this.#serviceName = serviceName;
    this.#region = region;
  }

  /**
   *
   * @param target - Target ARN
   */
  async register(target: string) {
    await this.addPermission();
  }

  /**
   * @public
   * Adds permission to itself
   */
  private async addPermission() {
    /**
     * Get account id of the caller
     */

    /**
     * Attach the retrieved id as the principal
     */
    this.#service.send(
      new AddPermissionCommand({
        AWSAccountIds,
      })
    );
  }
}
