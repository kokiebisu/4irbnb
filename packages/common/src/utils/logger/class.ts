import {
  ILoggerService,
  ILoggerServiceConstructorParams,
  IServiceErrorParams,
  IServiceLogParams,
} from "./types";
import { ILoggerClient } from "./winston";

/**
 * @public
 * Blue that implements the util that logs
 */
export class LoggerService implements ILoggerService {
  #client: ILoggerClient;
  serviceLocation: string;

  constructor({
    client,
    packageName,
    className,
  }: ILoggerServiceConstructorParams) {
    this.#client = client;
    this.serviceLocation = `${packageName}:${className}`;
  }

  log({ location, message }: IServiceLogParams): void {
    this.#client.log({
      location: `${this.serviceLocation}:${location}`,
      message,
    });
  }

  error({ location, message }: IServiceErrorParams): void {
    this.#client.error({
      location: `${this.serviceLocation}:${location}`,
      message,
    });
  }
}
