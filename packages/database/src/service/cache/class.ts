import { ILoggerUtils, LoggerUtils } from "@4irbnb/common";
import { PACKAGE_NAME } from "../..";
import { ElastiCacheClient } from "../../infra/elasticache";
import {
  ICacheClient,
  ICacheService,
  ICacheServiceConstructorParams,
  ICacheServiceInitializeProps,
} from "./types";

export class CacheService implements ICacheService {
  #client: ICacheClient;
  #logger: ILoggerUtils = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });
  private constructor({ client }: ICacheServiceConstructorParams) {
    this.#client = client;
    console.log(this.#client);
    this.#logger.log({
      location: "constructor",
      message: "Successfully initialized...",
    });
  }

  public static create({ region }: ICacheServiceInitializeProps) {
    return new CacheService({
      client: ElastiCacheClient.initialize({ region }),
    });
  }
}
