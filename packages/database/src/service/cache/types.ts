import { TRegion } from "@4irbnb/common";

export interface ICacheService {}

export interface ICacheServiceConstructorParams {
  client: ICacheClient;
}

export interface ICacheServiceCreateProps {
  region: TRegion;
}

// Client
export interface ICacheClient {}

export interface CacheClientConstructorProps {
  region: TRegion;
}

export interface ICacheClientCreateProps {
  region: TRegion;
}
