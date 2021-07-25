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

  async log({ location, message }: IServiceLogParams): Promise<void> {
    try {
      await this.#service.log({
        location: `${this.serviceLocation}:${location}`,
        message,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async error({ location, message }: IServiceErrorParams): Promise<void> {
    try {
      await this.#service.error({
        location: `${this.serviceLocation}:${location}`,
        message: `[${this.serviceLocation}]:${message}`,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
