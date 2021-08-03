import { PackageEnum } from "../../../enum";

/**
 * @public
 */
export interface IConfigClient {
  get(params: IConfigClientGetParams): Promise<string | undefined>;
  set(params: IConfigClientSetParams): Promise<void>;
  delete(params: IConfigClientDeleteParams): Promise<void>;
}

/**
 * @public
 */
export interface ISSMClientConstructorParams {
  region: "us-east-1";
}

/**
 * @public
 */
export interface IConfigClientGetParams {
  packageName: PackageEnum;
  key: string;
}

/**
 * @public
 */
export interface IConfigClientSetParams {
  packageName: PackageEnum;
  key: string;
  value: string;
}

/**
 * @public
 */
export interface IConfigClientDeleteParams {
  packageName: PackageEnum;
  key: string;
}
