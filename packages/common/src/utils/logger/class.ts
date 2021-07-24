import {
  ILoggerConstructorParams,
  ILoggerService,
  IServiceErrorParams,
  IServiceLogParams,
} from "./types";

/**
 * @public
 * Blue that implements the util that logs
 */
export class Logger {
  #service: ILoggerService;
  #location: string;

  constructor({
    service,
    packageName,
    className,
    methodName,
    helperMethodName,
  }: ILoggerConstructorParams) {
    this.#service = service;
    this.#location = `${packageName}:${className}:${methodName}:${helperMethodName}`;
  }

  error({ message }: IServiceErrorParams) {
    this.#service.error({
      message: `[${this.#location}]:${message}`,
    });
  }

  log({ message }: IServiceLogParams) {
    this.#service.error({
      message: `[${this.#location}]:${message}`,
    });
  }
}
