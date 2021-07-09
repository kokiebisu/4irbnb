import { IUnauthorizedError } from ".";
import { BaseError } from "..";

/**
 * @public
 * Customized error to be thrown when the user tries to perform an authorized action
 */
export class UnauthorizedError extends BaseError {
  constructor() {
    super("You are not authenticated", 401);
  }

  /**
   * Retrieves the error information
   * @returns an object of type {@link @nextbnb/common#IUnauthorizedError}
   */
  get(): IUnauthorizedError {
    return {
      message: this.message,
      statusCode: this.statusCode,
      status: this.status,
    };
  }
}
