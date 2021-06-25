import { BaseError } from '../base';
import { IApiError } from './type';

export class ApiError extends BaseError {
  serviceName: string;

  constructor({ message, statusCode, serviceName }: IApiError) {
    super({ statusCode, message });
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
