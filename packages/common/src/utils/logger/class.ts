import {
  ILoggerClient,
  ILoggerUtils,
  IServiceConstructorProps,
  IServiceErrorProps,
  IServiceLogProps,
  IServiceInitializeProps,
} from "./types";
import { WinstonClient } from "./winston";

/**
 * @public
 * Blue that implements the util that logs
 */
export class LoggerUtils implements ILoggerUtils {
  #client: ILoggerClient;
  serviceLocation: string;

  private constructor({ packageName, className }: IServiceConstructorProps) {
    this.#client = new WinstonClient();
    this.serviceLocation = `${packageName}:${className}`;
  }

  public static initialize({
    packageName,
    className,
  }: IServiceInitializeProps) {
    return new LoggerUtils({ packageName, className });
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
