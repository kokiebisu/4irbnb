import { IBaseError } from '../base';

export interface IApiError extends IBaseError {
  serviceName: string;
}
