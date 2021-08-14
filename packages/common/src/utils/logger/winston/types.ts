export interface ILoggerClient {
  log(args: ILoggerClientLogProps): void;
  error(args: ILoggerClientErrorProps): void;
}

export interface ILoggerClientLogProps {
  location: string;
  message: string;
}

export interface ILoggerClientErrorProps {
  location: string;
  message: string;
}
