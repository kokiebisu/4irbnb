import { BaseError } from '../base';
import { IApiError } from './type';

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
