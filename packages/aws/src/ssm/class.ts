import {
  SSMClient,
  GetParameterCommand,
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
  public async getServiceSecret(key: string): Promise<string | undefined> {
    const path = `/${this.environment as TEnvironment}/${
      this.serviceName as ServiceEnum
    }/${key}`;
    try {
      console.log("path", path);
      const response = await this.service.send(
        new GetParameterCommand({
          Name: path,
          WithDecryption: true,
        })
      );
      console.log("response", response);
      return response.Parameter?.Value;
    } catch (err) {
      throw new Error(`[SSM GetParameterCommand] ${err}`);
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
    const path = `/${this.environment as TEnvironment}/${
      this.serviceName as ServiceEnum
    }/${key}`;
    try {
      console.log("path1", path);
      const response = await this.service.send(
        new PutParameterCommand({
          Name: path,
          Value: value,
          Overwrite: true,
          DataType: "text",
          Type: "String",
        })
      );
      console.log("response2", response);
      return response;
    } catch (err) {
      throw new Error(`[SSM PutParameterCommand] ${err}`);
    }
  }
}
