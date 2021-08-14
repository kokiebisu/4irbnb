import {
  ILoggerService,
  IServiceConstructorProps,
  IServiceCreateProps,
  IServiceErrorProps,
  IServiceLogProps,
} from "./types";
import { ILoggerClient, WinstonClient } from "./winston";

/**
 * @public
 * Blue that implements the util that logs
 */
export class LoggerService implements ILoggerService {
  #client: ILoggerClient;
  serviceLocation: string;

  private constructor({ packageName, className }: IServiceConstructorProps) {
    this.#client = new WinstonClient();
    this.serviceLocation = `${packageName}:${className}`;
  }

  public static create({ packageName, className }: IServiceCreateProps) {
    return new LoggerService({ packageName, className });
  }

  public log({ location, message }: IServiceLogProps): void {
    this.#client.log({
      location: `${this.serviceLocation}:${location}`,
      message,
    });
  }

  public error({ location, message }: IServiceErrorProps): void {
    this.#client.error({
      location: `${this.serviceLocation}:${location}`,
      message,
    });
  }
}
