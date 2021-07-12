import {
  SSMClient,
  GetParameterCommand,
  GetParameterCommandOutput,
  PutParameterCommand,
  PutParameterCommandOutput,
} from "@aws-sdk/client-ssm";
import { ServiceEnum, TEnvironment } from "@nextbnb/common";
// import { ApiError } from "@nextbnb/error";
import { AWSService } from "../class";
import { AWSServiceEnum } from "../enum";

/**
 * @public
 */
export class SSM extends AWSService {
  service: SSMClient;

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
    super(serviceName, AWSServiceEnum.ssm, environment);
    this.service = new SSMClient({ region });
  }

  /**
   *
   * @param key
   * @param includeEnvironment
   * @returns
   */
  public async getServiceSecret(
    key: string,
    // value: string,
    includeEnvironment: boolean
  ): Promise<GetParameterCommandOutput> {
    const path = `/${this.serviceName as ServiceEnum}${
      includeEnvironment ? `/${this.environment as TEnvironment}` : ""
    }/${key}`;
    try {
      return await this.service.send(
        new GetParameterCommand({
          Name: path,
          WithDecryption: true,
        })
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   *
   * @param key
   * @param value
   * @returns
   */
  public async setServiceSecret(
    key: string,
    value: string
  ): Promise<PutParameterCommandOutput> {
    const path = `/${this.serviceName as ServiceEnum}/${
      this.environment as TEnvironment
    }/${key}`;
    try {
      return await this.service.send(
        new PutParameterCommand({
          Name: path,
          Value: value,
          Overwrite: true,
          DataType: "text",
          Type: "string",
        })
      );
    } catch (err) {
      throw new Error(err);
    }
  }
}
