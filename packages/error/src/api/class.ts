import { IApiError } from ".";
import { BaseError } from "../base";

/**
 * @public
 * Blueprint for the ApiError
 */
export class ApiError extends BaseError {
  serviceName: string;

  constructor({ serviceName }: IApiError) {
    super({
      statusCode: 500,
      message: `[${serviceName}] There was an error in the API`,
    });
    this.serviceName = serviceName;
  }
}
