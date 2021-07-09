import {
  SSMClient,
  GetParameterCommand,
  GetParameterCommandOutput,
  PutParameterCommand,
  PutParameterCommandOutput,
} from "@aws-sdk/client-ssm";
import { ServiceEnum, TEnvironment } from "@nextbnb/common";
import { ApiError } from "@nextbnb/error";
import { Logger } from "@nextbnb/utils";
import { AWSServiceEnum } from "../enum";

/**
 * @public
 */
export class SSM {
  environment: TEnvironment;
  serviceName?: ServiceEnum;
  logger: Logger;
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
    this.serviceName = serviceName;
    this.service = new SSMClient({ region });
    this.environment = environment;

    this.logger = new Logger({
      service: AWSServiceEnum.ssm,
      level: "info",
      environment,
    });
  }

  /**
   *
   * @param key
   * @param includeEnvironment
   * @returns
   */
  async getServiceSecret(
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
      throw new ApiError(`AWS ${AWSServiceEnum.ssm}`);
    }
  }

  /**
   *
   * @param key
   * @param value
   * @returns
   */
  async setServiceSecret(
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
        })
      );
    } catch (err) {
      throw new ApiError(`AWS ${AWSServiceEnum.ssm}`);
    }
  }
}
