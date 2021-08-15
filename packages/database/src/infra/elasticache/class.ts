import { ElastiCacheClient as Client } from "@aws-sdk/client-elasticache";
import {
  CacheClientConstructorProps,
  ICacheClient,
  ICacheClientCreateProps,
} from "../../service/cache/types";
import { LoggerUtils, ILoggerUtils } from "@4irbnb/common";
import { PACKAGE_NAME } from "../..";

export class ElastiCacheClient implements ICacheClient {
  #logger: ILoggerUtils;
  #package: Client;
  constructor({ region }: CacheClientConstructorProps) {
    this.#package = new Client({ region });
    this.#logger = LoggerUtils.create({
      packageName: PACKAGE_NAME,
      className: this.constructor.name,
    });
  }

  public static create({ region }: ICacheClientCreateProps) {
    return new ElastiCacheClient({ region });
  }
}
