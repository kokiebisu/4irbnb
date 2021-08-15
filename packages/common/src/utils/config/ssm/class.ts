import {
  SSM,
  GetParameterCommand,
  PutParameterCommand,
  DeleteParameterCommand,
} from "@aws-sdk/client-ssm";
import { PackageEnum } from "../../../enum";
import {
  IConfigClient,
  IConfigClientDeleteProps,
  IConfigClientGetProps,
  IConfigClientSetProps,
  ISSMClientConstructorProps,
} from "../types";
import { IConfigClientCreateProps } from "..";
import { LoggerUtils } from "../..";

/**
 * @public
 */
export class SSMClient implements IConfigClient {
  #client;
  #logger;

  private constructor({ region }: ISSMClientConstructorProps) {
    this.#client = new SSM({ region });
    this.#logger = LoggerUtils.create({
      packageName: PackageEnum.common,
      className: "SSMClient",
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
