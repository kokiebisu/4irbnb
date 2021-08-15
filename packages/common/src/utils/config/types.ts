import { PackageEnum, TRegion } from "../..";

// Service
export interface IConfigUtils {
  get(params: IConfigUtilsGetParams): Promise<string | undefined>;
  set(params: IConfigUtilsSetParams): Promise<void>;
  delete(params: IConfigUtilsDeleteParams): Promise<void>;
}

// Constructor
export interface IConfigUtilsConstructorParams {
  client: IConfigClient;
}

// Params
export interface IConfigUtilsGetParams extends IConfigClientGetProps {}

export interface IConfigUtilsSetParams extends IConfigClientSetProps {}

export interface IConfigUtilsDeleteParams extends IConfigClientDeleteProps {}

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
