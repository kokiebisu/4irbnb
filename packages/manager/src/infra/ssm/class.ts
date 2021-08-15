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
  #groupName: string;

  private constructor({ region, groupName }: ISSMClientConstructorProps) {
    this.#client = new SSM({ region });
    this.#logger = LoggerUtils.initialize({
      packageName: PACKAGE_NAME,
      className: this.constructor.name,
    });
    this.#groupName = groupName;
  }

  public static initialize({ region, groupName }: IConfigClientCreateProps) {
    return new SSMClient({ region, groupName });
  }

  /**
   * @public
   */
  async get({ key }: IConfigClientGetProps) {
    const name = this.#groupName.replace("@", "");
    try {
      return (
        await this.#client.send(
          new GetParameterCommand({
            Name: `/4irbnb/${name}/${key}`,
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
    const name = this.#groupName.replace("@", "");
    try {
      await this.#client.send(
        new PutParameterCommand({
          Name: `/4irbnb/${name}/${key}`,
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
    const name = this.#groupName.replace("@", "");
    try {
      await this.#client.send(
        new DeleteParameterCommand({
          Name: `/4irbnb/${name}/${key}`,
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
