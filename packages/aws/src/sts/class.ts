import { STSClient, GetCallerIdentityCommand } from "@aws-sdk/client-sts";
import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
import { AWSService } from "../class";
import { AWSServiceEnum } from "../enum";

/**
 * Blueprint of the class which enables performing STS Service actions
 */
export class STS extends AWSService {
  protected service: STSClient;

  constructor(
    serviceName: ServiceEnum,
    region: TRegion,
    environment: TEnvironment
  ) {
    super(serviceName, AWSServiceEnum.sts, environment);
    this.service = new STSClient({ region });
  }

  /**
   * @public
   * Retrieves the following information of the current user:
   * - UserId
   * - Arn
   * - Account ID number
   */
  async getCallerInfo() {
    await this.service.send(new GetCallerIdentityCommand({}));
  }
}
