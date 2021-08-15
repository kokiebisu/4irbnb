import { ElastiCacheClient as Client } from "@aws-sdk/client-elasticache";
import {
  CacheClientConstructorProps,
  ICacheClient,
  ICacheClientInitializeProps,
} from "../../service";
import { LoggerUtils, ILoggerUtils } from "@4irbnb/common";
import { PACKAGE_NAME } from "../../config";

export class ElastiCacheClient implements ICacheClient {
  #logger: ILoggerUtils = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });
  #package: Client;
  constructor({ region }: CacheClientConstructorProps) {
    this.#package = new Client({ region });
    console.log(this.#logger);
    console.log(this.#package);
  }

  public static initialize({ region }: ICacheClientInitializeProps) {
    return new ElastiCacheClient({ region });
  }
}
