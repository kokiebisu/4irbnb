// import { AddPermissionCommand } from "@aws-sdk/client-sqs";
import { AddPermissionCommand, SQSClient } from "@aws-sdk/client-sqs";
import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
import { AWSService } from "../class";
import { AWSServiceEnum } from "../enum";
import { createAWSService } from "../factory";
import { STS, STSCreator } from "../sts";

/**
 * @public
 * Blueprint of the class which enables performing SQS Service actions
 */
export class SQS extends AWSService {
  protected service: SQSClient;
  queue: string;

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
    this.service = new SQSClient({ region });
  }

  /**
   * @public
   * Registers the SQS
   *
   * @param target - Target ARN
   */
  async register() {
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
    const sts = createAWSService(
      new STSCreator(),
      null,
      "us-east-1",
      this.environment,
      null
    ) as STS;

    const { account } = await sts.getCallerInfo();

    /**
     * Attach the retrieved id as the principal
     */
    this.service.send(
      new AddPermissionCommand({
        AWSAccountIds: account,
        Actions: [],
      })
    );
  }

  public createCh;
}
