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

import { LoggerUtils } from "../../../../common/src/utils";
import { PACKAGE_NAME } from "../..";

/**
 * @public
 */
export class SSMClient implements IConfigClient {
  #client;
  #logger;

  private constructor({ region }: ISSMClientConstructorProps) {
    this.#client = new SSM({ region });
    this.#logger = LoggerUtils.create({
      packageName: PACKAGE_NAME,
      className: this.constructor.name,
    });
  }

  public static create({ region }: IConfigClientCreateProps) {
    return new SSMClient({ region });
  }

  /**
   * @public
   */
  async get({ packageName, key }: IConfigClientGetProps) {
    const name = packageName.replace("@", "");
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
  async set({ packageName, key, value }: IConfigClientSetProps) {
    const name = packageName.replace("@", "");
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
  async delete({ packageName, key }: IConfigClientDeleteProps) {
    const name = packageName.replace("@", "");
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
