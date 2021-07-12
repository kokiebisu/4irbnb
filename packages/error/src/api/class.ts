import { BaseError } from "../base";

/**
 * @public
 * Blueprint for the ApiError
 */
export class ApiError extends BaseError {
  serviceName: string;

  constructor(serviceName: string) {
    super(`[${serviceName}] There was an error in the API`, 500);
    this.serviceName = serviceName;
  }
}
