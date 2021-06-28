import { TEnvironment } from '@nextbnb/common';

export type TLoggerLevel =
  | 'error'
  | 'warn'
  | 'info'
  | 'http'
  | 'verbose'
  | 'debug'
  | 'silly';

export interface ILogger {
  service: string;
  level: TLoggerLevel;
  requestId?: string;
  environment: TEnvironment;
}

export interface IInfo {
  timestamp?: Date;
  message: string;
  level: string;
}
