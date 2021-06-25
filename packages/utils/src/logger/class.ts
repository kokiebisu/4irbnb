import * as winston from 'winston';
import { ILogger } from './interface';

export class Logger {
  #logger: winston.Logger;
  #requester?: string;

  /**
   * Constructs the Logger instance
   * @param service
   * @param level
   * @param requestId - Entity that requested the logging
   */
  constructor({ service, level, requestId }: ILogger) {
    this.#requester = requestId;
    this.#logger = winston.createLogger({
      level,
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.json(),
        this._serviceFormat()
      ),
      defaultMeta: { service },
    });
  }

  private _serviceFormat(): winston.Logform.Format {
    return winston.format.printf(
      ({
        level,
        message,
        label,
        timestamp,
      }: winston.Logform.TransformableInfo): string => {
        return `[${
          this.#requester || ''
        } ${timestamp} ${label}] ${level}: ${message}`;
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
