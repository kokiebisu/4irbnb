import { TEnvironment } from '@nextbnb/common';

export interface ILogger {
  service: string;
  level: 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly';
  requestId?: string;
  environment: TEnvironment;
}

export interface IInfo {
  timestamp?: Date;
  message: string;
  level: string;
}
