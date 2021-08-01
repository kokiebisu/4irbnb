import { PackageEnum } from "../enum";

// Service
export interface IConfigService {
  get(params: IConfigServiceGetParams): Promise<string | undefined>;
  set(params: IConfigServiceSetParams): Promise<void>;
  delete(params: IConfigServiceDeleteParams): Promise<void>;
}

// Constructor
export interface IConfigServiceConstructorParams {
  service: IConfigService;
}

// Params
export interface IConfigServiceGetParams
  extends IWithPackageNameParams,
    IWithKeyParams {}

export interface IConfigServiceSetParams
  extends IWithPackageNameParams,
    IWithKeyParams,
    IWithValueParams {}

export interface IConfigServiceDeleteParams
  extends IWithPackageNameParams,
    IWithKeyParams {}

// With Params
export interface IWithPackageNameParams {
  packageName: PackageEnum;
}

export interface IWithKeyParams {
  key: string;
}

export interface IWithValueParams {
  value: string | undefined;
}
