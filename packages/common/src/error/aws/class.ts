import { IAWSServiceErrorConstructor } from '.';
import { BaseError } from '..';

export class AWSServiceError extends BaseError {
  constructor({ serviceName }: IAWSServiceErrorConstructor) {
    super({
      statusCode: 500,
      message: `There was an error in AWS::${serviceName as string}`,
    });
  }
}
