export interface ILoggerClient {
  log(params: ILoggerClientLogParams): void;
  error(params: ILoggerClientErrorParams): void;
}

export interface ILoggerClientLogParams {
  location: string;
  message: string;
}

export interface ILoggerClientErrorParams {
  location: string;
  message: string;
}
