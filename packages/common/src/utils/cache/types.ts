import { IRegion } from "../../types";

export interface ICacheService {}

export interface ICacheServiceConstructorParams {
  client: ICacheClient;
}

// Client
export interface ICacheClient {}

export interface CacheClientConstructorParams extends IRegion {}
