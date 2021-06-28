import * as winston from 'winston';
import { ILogger } from './interface';
import { TEnvironment } from '@nextbnb/common';

export class Logger {
  #logger: winston.Logger;
  #requester?: string;
  #environment: TEnvironment;

  /**
   * Constructs the Logger instance
   * @param service
   * @param level
   * @param requestId - Entity that requested the logging
   * @param environment - 'production' or 'development'
   */
  constructor({ service, level, requestId, environment }: ILogger) {
    this.#requester = requestId;
    this.#logger = winston.createLogger({
      level,
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.json(),
        this.#serviceFormat()
      ),
      defaultMeta: { service },
    });
    this.#environment = environment;
  }

  #serviceFormat(): winston.Logform.Format {
    return winston.format.printf(
      ({
        level,
        message,
        label,
        timestamp,
      }: winston.Logform.TransformableInfo): string => {
        return `[${this.#environment as string} ${this.#requester || ''} ${
          timestamp as string
        } ${label as string}] ${level}: ${message}`;
      }
    );
  }

  output = (
    type: 'error' | 'warning' | 'info' | 'log',
    args: winston.LogEntry
  ): void => {
    this.#logger[type](args);
  };
}
