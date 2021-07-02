import { Logger } from '@nextbnb/utils';
import { Service } from '../service';
import { TEnvironment } from '../types';

/**
 * @public
 * An abstraction of the servers that handle the requests
 */
export abstract class BaseServer {
  logger: Logger;
  constructor(serviceName: Service, environment: TEnvironment) {
    this.logger = new Logger({
      level: 'info',
      service: serviceName,
      environment,
    });
  }
  abstract setup(): void;
}
