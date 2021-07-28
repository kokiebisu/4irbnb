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
    this.#client = winston.createLogger({
      transports: [new winston.transports.Console()],
    });
  }

  log({ location, message }: IServiceLogParams): any {
    this.#client.log("info", `[${location}]:${message}`);
  }

  error({ location, message }: IServiceErrorParams): any {
    this.#client.log("error", `[${location}]:${message}`);
  }
}
