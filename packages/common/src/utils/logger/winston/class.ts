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
   */
  constructor() {
    this.#client = winston.createLogger();
  }

  log({ location, message }: IServiceLogParams): void {
    this.#client.log("info", `[${location}]:${message}`);
  }

  error({ location, message }: IServiceErrorParams): void {
    this.#client.log("error", `[${location}]:${message}`);
  }
}
