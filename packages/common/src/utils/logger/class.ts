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
  #serviceLocation: string;

  constructor({ service, packageName, className }: ILoggerConstructorParams) {
    this.#service = service;
    this.#serviceLocation = `${packageName}:${className}`;
  }

  error({ location, message }: IServiceErrorParams) {
    this.#service.error({
      location: `${this.#serviceLocation}:${location}`,
      message: `[${this.#serviceLocation}]:${message}`,
    });
  }

  log({ location, message }: IServiceLogParams) {
    this.#service.error({
      location: `${this.#serviceLocation}:${location}`,
      message: `[${this.#serviceLocation}]:${message}`,
    });
  }
}
