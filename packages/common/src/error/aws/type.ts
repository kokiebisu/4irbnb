import { AWSServiceEnum } from '../../enum';
import { IBaseError } from '../base';

/**
 * @public
 * Interface for the ApiError class
 */
export interface IAWSServiceError extends IBaseError {
  serviceName: AWSServiceEnum;
}

export interface IAWSServiceErrorConstructor {
  serviceName: AWSServiceEnum;
}
