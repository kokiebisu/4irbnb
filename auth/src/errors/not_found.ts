import { CustomError } from './custom';

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super('Page was not found');
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors = () => {
    return [{ message: 'Page not found' }];
  };
}
