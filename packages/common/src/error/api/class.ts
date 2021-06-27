import { BaseError } from '../base';
import { IApiError } from './type';

export class ApiError extends BaseError {
  serviceName: string;

  constructor({ serviceName }: IApiError) {
    super({
      statusCode: 500,
      message: `[${serviceName}] There was an error in the API`,
    });
    this.serviceName = serviceName;
  }

  get() {
    return {
      message: this.message,
      statusCode: this.statusCode,
      status: this.status,
      serviceName: this.serviceName,
    };
  }
}
