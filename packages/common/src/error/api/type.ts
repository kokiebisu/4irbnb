import { IBaseError } from '../base';

/**
 * @public
 * Interface for the ApiError class
 */
export interface IApiError extends IBaseError {
  serviceName: string;
}
