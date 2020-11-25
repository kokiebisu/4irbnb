import { CustomError } from './custom';

export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super('You are not authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors = () => {
    return [{ message: 'You are not authorized' }];
  };
}
