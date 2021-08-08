import { createLogger, Logger, transports } from "winston";
import { IServiceErrorParams, IServiceLogParams } from "../types";
import { ILoggerClient } from "./types";

export class WinstonClient implements ILoggerClient {
  #package: Logger;

  /**
   * Constructs the Logger instance
   */
  constructor() {
    this.#package = createLogger({
      transports: [new transports.Console()],
    });
  }

  /**
   * @public
   * Logs
   * @param param0
   */
  log({ location, message }: IServiceLogParams): any {
    this.#package.log("info", `[${location}]:${message}`);
  }

  /**
   * @public
   * Logs
   * @param param0
   */
  error({ location, message }: IServiceErrorParams): any {
    this.#package.log("error", `[${location}]:${message}`);
  }
}
