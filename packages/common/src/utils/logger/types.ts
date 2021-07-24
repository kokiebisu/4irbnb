import { PackageEnum } from "../../types/package";

/**
 * @public
 * Type of the logger level used in winston
 */
export type TLoggerLevel = "error" | "info";

export interface ILoggerService {
  log(params: IServiceLogParams): void;
  error(params: IServiceErrorParams): void;
}

export interface ILoggerConstructorParams {
  service: ILoggerService;
  packageName: PackageEnum;
  className: string;
  methodName: string;
  helperMethodName: string;
}

export interface IServiceErrorParams {
  message: string;
}

export interface IServiceLogParams {
  message: string;
}
