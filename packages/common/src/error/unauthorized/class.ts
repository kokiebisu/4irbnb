import { IUnauthorizedError } from '.';
import { BaseError } from '..';

/**
 * @public
 * Customized error to be thrown when the user tries to perform an authorized action
 */
export class UnauthorizedError extends BaseError {
  constructor() {
    super({
      statusCode: 401,
      message: 'You are not authenticated',
    });
  }

  /**
   * Retrieves the error information
   * @returns {object}
   */
  get(): IUnauthorizedError {
    return {
      message: this.message,
      statusCode: this.statusCode,
      status: this.status,
    };
  }
}
