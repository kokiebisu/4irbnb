import { PACKAGE_NAME } from "..";
import { ILoggerUtils, LoggerUtils } from "../../../common/dist";
import { SSMClient } from "../infra/ssm";
import {
  IConfigClient,
  IManagerServiceConstructorProps,
  IManagerServiceDeleteParams,
  IManagerServiceGetParams,
  IManagerServiceInitializeProps,
  IManagerServiceSetParams,
} from "./types";

export class ManagerService {
  #client: IConfigClient;
  #logger: ILoggerUtils;

  /**
   * @public
   * @param param0
   */
  private constructor({ client }: IManagerServiceConstructorProps) {
    this.#client = client;
    this.#logger = LoggerUtils.initialize({
      packageName: PACKAGE_NAME,
      className: this.constructor.name,
    });
  }

  public static initialize({
    groupName,
    region,
  }: IManagerServiceInitializeProps) {
    return new ManagerService({
      client: SSMClient.initialize({ region, groupName }),
    });
  }

  /**
   * @public
   * @param param0
   * @returns
   */
  async get({ key }: IManagerServiceGetParams) {
    return await this.#client.get({ key });
  }

  /**
   * @public
   * @param param0
   * @returns
   */
  async set({ key, value }: IManagerServiceSetParams) {
    try {
      await this.#client.set({ key, value });
    } catch (error: any) {
      this.#logger.error({ location: "set:set", message: error });
    }
  }

  /**
   * @public
   * @param param0
   * @returns
   */
  async delete({ key }: IManagerServiceDeleteParams) {
    try {
      await this.#client.delete({ key });
    } catch (error: any) {
      this.#logger.error({ location: "delete:delete", message: error });
    }
  }
}
