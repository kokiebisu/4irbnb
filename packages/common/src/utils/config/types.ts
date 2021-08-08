import {
  IConfigClient,
  IConfigClientDeleteParams,
  IConfigClientGetParams,
  IConfigClientSetParams,
} from "./ssm";

// Service
export interface IConfigService {
  get(params: IConfigServiceGetParams): Promise<string | undefined>;
  set(params: IConfigServiceSetParams): Promise<void>;
  delete(params: IConfigServiceDeleteParams): Promise<void>;
}

// Constructor
export interface IConfigServiceConstructorParams {
  client: IConfigClient;
}

// Params
export interface IConfigServiceGetParams extends IConfigClientGetParams {}

export interface IConfigServiceSetParams extends IConfigClientSetParams {}

export interface IConfigServiceDeleteParams extends IConfigClientDeleteParams {}
