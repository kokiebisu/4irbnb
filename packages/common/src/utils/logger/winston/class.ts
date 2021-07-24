import * as winston from "winston";
import {
  ILoggerService,
  IServiceErrorParams,
  IServiceLogParams,
} from "../types";

export class WinstonService implements ILoggerService {
  #client: winston.Logger;

  /**
   * Constructs the Logger instance
   * @param service
   * @param level
   * @param requestId - Entity that requested the logging
   * @param environment - 'production' or 'development'
   */
  constructor() {
    this.#client = winston.createLogger();
  }

  log({ message }: IServiceLogParams): void {
    this.#client.log("info", message);
  }

  error({ message }: IServiceErrorParams): void {
    this.#client.log("error", message);
  }
}
