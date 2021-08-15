import { SSMClient } from "./ssm";
import {
  IConfigClient,
  IConfigUtilsConstructorParams,
  IConfigUtilsDeleteParams,
  IConfigUtilsGetParams,
  IConfigUtilsSetParams,
} from "./types";

export class ConfigUtils {
  #client: IConfigClient;

  /**
   * @public
   * @param param0
   */
  private constructor({ client }: IConfigUtilsConstructorParams) {
    this.#client = client;
  }

  public static create() {
    return new ConfigUtils({
      client: SSMClient.create({ region: "us-east-1" }),
    });
  }

  /**
   * @public
   * @param param0
   * @returns
   */
  async get({ packageName, key }: IConfigUtilsGetParams) {
    return await this.#client.get({ packageName, key });
  }

  /**
   * @public
   * @param param0
   * @returns
   */
  async set({ packageName, key, value }: IConfigUtilsSetParams) {
    await this.#client.set({ packageName, key, value });
  }

  /**
   * @public
   * @param param0
   * @returns
   */
  async delete({ packageName, key }: IConfigUtilsDeleteParams) {
    await this.#client.delete({ packageName, key });
  }
}
