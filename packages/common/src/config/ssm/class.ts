import {
  SSM,
  GetParameterCommand,
  PutParameterCommand,
  DeleteParameterCommand,
} from "@aws-sdk/client-ssm";
import { createLogger } from "../..";
import { PackageEnum } from "../../enum";
import {
  IConfigService,
  IConfigServiceDeleteParams,
  IConfigServiceGetParams,
  IConfigServiceSetParams,
} from "../types";
import { ISSMClientConstructorParams } from "./types";

export class SSMClient implements IConfigService {
  #client;
  #logger;

  constructor({ region }: ISSMClientConstructorParams) {
    this.#client = new SSM({ region });
    this.#logger = createLogger({
      packageName: PackageEnum.common,
      className: "SSMClient",
    });
  }

  /**
   * @public
   */
  async get({ packageName, key }: IConfigServiceGetParams) {
    const name = packageName.replace("@", "");
    try {
      return (
        await this.#client.send(
          new GetParameterCommand({
            Name: `/${name}/${key}`,
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
  async set({ packageName, key, value }: IConfigServiceSetParams) {
    const name = packageName.replace("@", "");
    try {
      await this.#client.send(
        new PutParameterCommand({
          Name: `/${name}/${key}`,
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
  async delete({ packageName, key }: IConfigServiceDeleteParams) {
    const name = packageName.replace("@", "");
    try {
      await this.#client.send(
        new DeleteParameterCommand({
          Name: `/${name}/${key}`,
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
