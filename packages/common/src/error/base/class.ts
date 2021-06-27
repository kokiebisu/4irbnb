import { THttpStatus } from '../../enum/status/type';
import { IBaseError, IBaseErrorConstructor } from './type';

/**
 * @public
 * Blueprint for the BaseError which will be extended by other
 * specific errors
 *
 * @example
 * ```ts
 * const error = new BaseError({ message: 'There is a base error!', statusCode: 400 })
 * error.get()
 * ```
 */
export class BaseError extends Error {
  message: string;
  status: string;
  statusCode: THttpStatus;

  constructor({ message, statusCode }: IBaseErrorConstructor) {
    super(message || 'Base Error');

    this.message = message || 'Base Error';
    this.status = 'failure';
    this.statusCode = statusCode;
  }

  get(): IBaseError {
    return {
      message: this.message,
      status: this.status,
      statusCode: this.statusCode,
    };
  }
}
