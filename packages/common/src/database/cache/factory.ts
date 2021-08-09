import { IRegion } from "../../types";
import { CacheService } from "./class";
import { ElastiCacheClient } from "./elasticache";

export const createCacheService = ({ region }: IRegion) =>
  new CacheService({ client: new ElastiCacheClient({ region }) });
