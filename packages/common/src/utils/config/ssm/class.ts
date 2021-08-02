import {
  SSM,
  GetParameterCommand,
  PutParameterCommand,
  DeleteParameterCommand,
} from "@aws-sdk/client-ssm";
import { createLoggerService } from "../../logger";
import { PackageEnum } from "../../../enum";
import {
  IConfigClient,
  IConfigClientDeleteParams,
  IConfigClientGetParams,
  IConfigClientSetParams,
  ISSMClientConstructorParams,
} from "./types";

/**
 * @public
 */
export class SSMClient implements IConfigClient {
  #client;
  #logger;

  constructor({ region }: ISSMClientConstructorParams) {
    this.#client = new SSM({ region });
    this.#logger = createLoggerService({
      packageName: PackageEnum.common,
      className: "SSMClient",
    });
  }

  /**
   * @public
   */
  async get({ packageName, key }: IConfigClientGetParams) {
    const name = packageName.replace("@", "");
    try {
      return (
        await this.#client.send(
          new GetParameterCommand({
            Name: `/nextbnb/${name}/${key}`,
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
  async set({ packageName, key, value }: IConfigClientSetParams) {
    const name = packageName.replace("@", "");
    try {
      await this.#client.send(
        new PutParameterCommand({
          Name: `/nextbnb/${name}/${key}`,
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
  async delete({ packageName, key }: IConfigClientDeleteParams) {
    const name = packageName.replace("@", "");
    try {
      await this.#client.send(
        new DeleteParameterCommand({
          Name: `/nextbnb/${name}/${key}`,
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
