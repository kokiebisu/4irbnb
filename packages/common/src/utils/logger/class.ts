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
export class LoggerService {
  #service: ILoggerService;
  serviceLocation: string;

  constructor({ service, packageName, className }: ILoggerConstructorParams) {
    this.#service = service;
    this.serviceLocation = `${packageName}:${className}`;
  }

  log({ location, message }: IServiceLogParams): void {
    this.#service.log({
      location: `${this.serviceLocation}:${location}`,
      message,
    });
  }

  error({ location, message }: IServiceErrorParams): void {
    this.#service.error({
      location: `${this.serviceLocation}:${location}`,
      message: `[${this.serviceLocation}]:${message}`,
    });
  }
}
