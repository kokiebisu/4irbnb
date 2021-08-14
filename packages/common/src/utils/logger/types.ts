/**
 * @public
 * Type of the logger level used in winston
 */
export type TLoggerLevel = "error" | "info";

export interface ILoggerService {
  log(args: IServiceLogProps): void;
  error(args: IServiceErrorProps): void;
}

export interface IServiceConstructorProps extends IWithLocationProps {}

export interface IServiceCreateProps extends IWithLocationProps {}

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
