import {
  SSM,
  GetParameterCommand,
  PutParameterCommand,
  DeleteParameterCommand,
} from "@aws-sdk/client-ssm";
import {
  IConfigClient,
  IConfigClientCreateProps,
  IConfigClientDeleteProps,
  IConfigClientGetProps,
  IConfigClientSetProps,
  ISSMClientConstructorProps,
} from "../../service";

import { ILoggerUtils, LoggerUtils } from "@4irbnb/common";
import { PACKAGE_NAME } from "../..";

/**
 * @public
 */
export class SSMClient implements IConfigClient {
  #client;
  #logger: ILoggerUtils;
  #serviceName: string;

  private constructor({ region, serviceName }: ISSMClientConstructorProps) {
    this.#client = new SSM({ region });
    this.#logger = LoggerUtils.initialize({
      packageName: PACKAGE_NAME,
      className: this.constructor.name,
    });
    this.#serviceName = serviceName;
  }

  public static initialize({ region, serviceName }: IConfigClientCreateProps) {
    return new SSMClient({ region, serviceName });
  }

  /**
   * @public
   */
  async get({ key }: IConfigClientGetProps) {
    const name = this.#serviceName.replace("@", "");
    try {
      return (
        await this.#client.send(
          new GetParameterCommand({
            Name: `/airbnb/${name}/${key}`,
          })
        )
      ).Parameter?.Value;
    } catch (error) {
      this.#logger.error({
        location: "get:send",
        message: error as string,
      });
      return undefined;
    }
  }

  /**
   * @public
   */
  async set({ key, value }: IConfigClientSetProps) {
    const name = this.#serviceName.replace("@", "");
    try {
      await this.#client.send(
        new PutParameterCommand({
          Name: `/airbnb/${name}/${key}`,
          Value: value,
          Overwrite: true,
          DataType: "text",
          Type: "String",
        })
      );
    } catch (error) {
      this.#logger.error({
        location: "set:send",
        message: error as string,
      });
    }
  }

  /**
   * @public
   */
  async delete({ key }: IConfigClientDeleteProps) {
    const name = this.#serviceName.replace("@", "");
    try {
      await this.#client.send(
        new DeleteParameterCommand({
          Name: `/airbnb/${name}/${key}`,
        })
      );
    } catch (error) {
      this.#logger.error({
        location: "set:send",
        message: error as string,
      });
    }
  }
}
