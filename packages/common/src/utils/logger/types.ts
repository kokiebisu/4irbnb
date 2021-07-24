/**
 * @public
 * Type of the logger level used in winston
 */
export type TLoggerLevel = "error" | "info";

export interface ILoggerService {
  log(params: IServiceLogParams): void;
  error(params: IServiceErrorParams): void;
}

export interface ILoggerConstructorParams extends IWithLocationParams {
  service: ILoggerService;
}

export interface IServiceErrorParams extends IWithMessageParams {}

export interface IServiceLogParams extends IWithMessageParams {}

export interface ICreateLoggerParams extends IWithLocationParams {}

export interface IWithMessageParams {
  location: string;
  message: string;
}

export interface IWithLocationParams {
  packageName: string;
  className: string;
}
