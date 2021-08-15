import { PackageEnum, TRegion } from "../..";

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
export interface IConfigServiceGetParams extends IConfigClientGetProps {}

export interface IConfigServiceSetParams extends IConfigClientSetProps {}

export interface IConfigServiceDeleteParams extends IConfigClientDeleteProps {}

/**
 * @public
 */
export interface IConfigClient {
  get(params: IConfigClientGetProps): Promise<string | undefined>;
  set(params: IConfigClientSetProps): Promise<void>;
  delete(params: IConfigClientDeleteProps): Promise<void>;
}

/**
 * @public
 */
export interface ISSMClientConstructorProps {
  region: "us-east-1";
}

/**
 * @public
 */
export interface IConfigClientGetProps {
  packageName: PackageEnum;
  key: string;
}

/**
 * @public
 */
export interface IConfigClientSetProps {
  packageName: PackageEnum;
  key: string;
  value: string;
}

/**
 * @public
 */
export interface IConfigClientDeleteProps {
  packageName: PackageEnum;
  key: string;
}

export interface IConfigClientCreateProps {
  region: TRegion;
}
