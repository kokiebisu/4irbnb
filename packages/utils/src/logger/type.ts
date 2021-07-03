import { TEnvironment } from '@nextbnb/common';

/**
 * @public
 * Type of the logger level used in winston
 */
export type TLoggerLevel =
  | 'error'
  | 'warn'
  | 'info'
  | 'http'
  | 'verbose'
  | 'debug'
  | 'silly';

/**
 * Interface for the winston logger
 */
export interface ILogger {
  service: string;
  level: TLoggerLevel;
  requestId?: string;
  environment: TEnvironment;
}
