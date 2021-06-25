import { THttpStatus } from '../../enum/status/type';

export interface IBaseErrorConstructor {
  message: string;
  statusCode: THttpStatus;
}

export interface IBaseError extends IBaseErrorConstructor {
  status: string;
}
