import { THttpStatus } from '../../enum/status/type';

/**
 * @public
 * Interface for constructing the BaseError instance
 */
export interface IBaseErrorConstructor {
  message: string;
  statusCode: THttpStatus;
}

/**
 * @public
 * Interface for the BaseError instance
 */
export interface IBaseError extends IBaseErrorConstructor {
  status: string;
}
