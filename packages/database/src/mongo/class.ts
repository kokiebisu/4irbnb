import { Logger } from '@nextbnb/utils';
import { IMongo } from './type';

export class MongoClient {
  #logger: Logger;

  constructor({ environment, providedPackage, serviceName }: IMongo) {
    const logger = new Logger({ service: serviceName, environment });
  }
}
