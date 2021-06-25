export interface ILogger {
  service: string;
  level: 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly';
  requestId?: string;
}

export interface IInfo {
  timestamp?: Date;
  message: string;
  level: string;
}
