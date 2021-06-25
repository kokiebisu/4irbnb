import * as winston from 'winston';
import { ILogger } from './interface';

export class Logger {
  #logger: winston.Logger;

  /**
   * Constructs the Logger instance
   * @param service
   * @param level
   * @param requestId - Entity that requested the logging
   */
  constructor({ service, level, requestId }: ILogger) {
    this.#logger = winston.createLogger({
      level,
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.json()
      ),
      defaultMeta: { service },
    });
  }

  output(
    type: 'error' | 'warning' | 'info' | 'log',
    args: winston.LogEntry
  ): void {
    this.#logger[type](args);
  }
}
