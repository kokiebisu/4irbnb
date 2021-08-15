import { SSMClient } from "./ssm";
import {
  IConfigClient,
  IConfigServiceConstructorParams,
  IConfigServiceDeleteParams,
  IConfigServiceGetParams,
  IConfigServiceSetParams,
} from "./types";

export class ConfigService {
  #client: IConfigClient;

  /**
   * @public
   * @param param0
   */
  private constructor({ client }: IConfigServiceConstructorParams) {
    this.#client = client;
  }

  public static create() {
    return new ConfigService({
      client: SSMClient.create({ region: "us-east-1" }),
    });
  }

  /**
   * @public
   * @param param0
   * @returns
   */
  async get({ packageName, key }: IConfigServiceGetParams) {
    return await this.#client.get({ packageName, key });
  }

  /**
   * @public
   * @param param0
   * @returns
   */
  async set({ packageName, key, value }: IConfigServiceSetParams) {
    await this.#client.set({ packageName, key, value });
  }

  /**
   * @public
   * @param param0
   * @returns
   */
  async delete({ packageName, key }: IConfigServiceDeleteParams) {
    await this.#client.delete({ packageName, key });
  }
}
