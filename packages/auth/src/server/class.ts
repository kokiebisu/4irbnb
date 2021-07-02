import { BaseServer } from '@nextbnb/base';
import { ServiceEnum, TEnvironment } from '@nextbnb/common';

/**
 * @public
 * Blueprint that implements a customized server for the Auth Services
 */
export class AuthServer extends BaseServer {
  constructor(
    serviceName: ServiceEnum,
    environment: TEnvironment,
    port: number
  ) {
    super(serviceName, environment, port);
  }
}
