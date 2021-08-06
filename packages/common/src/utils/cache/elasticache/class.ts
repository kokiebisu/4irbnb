import { ElastiCacheClient as Client } from "@aws-sdk/client-elasticache";
import { CacheClientConstructorParams, ICacheClient } from "../types";

export class ElastiCacheClient implements ICacheClient {
  #package: Client;
  constructor({ region }: CacheClientConstructorParams) {
    this.#package = new Client({ region });
  }
}
