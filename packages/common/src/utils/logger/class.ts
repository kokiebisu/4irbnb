import * as winston from "winston";
import { TLoggerLevel } from "./type";
import { TEnvironment } from "../../types";

/**
 * @public
 * Blue that implements the util that logs
 */
export class Logger {
  #logger: winston.Logger;
  #requester?: string;
  #environment: TEnvironment;
  #level: TLoggerLevel;

  /**
   * Constructs the Logger instance
   * @param service
   * @param level
   * @param requestId - Entity that requested the logging
   * @param environment - 'production' or 'development'
   */
  constructor(
    serviceName: string,
    level: TLoggerLevel,
    requestId: string,
    environment: TEnvironment
  ) {
    this.#requester = requestId;
    this.#logger = winston.createLogger({
      level,
      format: winston.format.combine(
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        winston.format.json(),
        this._serviceFormat()
      ),
      defaultMeta: { service: serviceName },
    });
    this.#environment = environment;
    this.#level = level;
  }

  private _serviceFormat(): winston.Logform.Format {
    return winston.format.printf(
      ({
        level,
        message,
        label,
        timestamp,
      }: winston.Logform.TransformableInfo): string => {
        return `[${this.#environment as string} ${this.#requester || ""} ${
          timestamp as string
        } ${label as string}] ${level}: ${message}`;
      }
    );
  }

  output = (message: string): void => {
    this.#logger[this.#level]({
      level: this.#level,
      message,
    });
  };
}
