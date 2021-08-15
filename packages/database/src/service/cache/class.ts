import { ElastiCacheClient } from "../../infra/elasticache";
import {
  ICacheClient,
  ICacheService,
  ICacheServiceConstructorParams,
  ICacheServiceCreateProps,
} from "./types";

export class CacheService implements ICacheService {
  #client: ICacheClient;
  private constructor({ client }: ICacheServiceConstructorParams) {
    this.#client = client;
    console.log(this.#client);
  }

  public static create({ region }: ICacheServiceCreateProps) {
    return new CacheService({ client: ElastiCacheClient.create({ region }) });
  }
}
