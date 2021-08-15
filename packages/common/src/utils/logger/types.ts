/**
 * @public
 * Type of the logger level used in winston
 */
export type TLoggerLevel = "error" | "info";

export interface ILoggerUtils {
  log(args: IServiceLogProps): void;
  error(args: IServiceErrorProps): void;
}

export interface IServiceConstructorProps extends IWithLocationProps {}

export interface IServiceInitializeProps extends IWithLocationProps {}

export interface IServiceErrorProps extends IWithMessageProps {}

export interface IServiceLogProps extends IWithMessageProps {}

export interface ICreateLoggerProps extends IWithLocationProps {}

export interface IWithMessageProps {
  location: string;
  message: string;
}

export interface IWithLocationProps {
  packageName: string;
  className: string;
}

export interface ILoggerClient {
  log(args: ILoggerClientLogProps): void;
  error(args: ILoggerClientErrorProps): void;
}

export interface ILoggerClientLogProps {
  location: string;
  message: string;
}

export interface ILoggerClientErrorProps {
  location: string;
  message: string;
}
