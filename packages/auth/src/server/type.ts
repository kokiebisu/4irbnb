import { Service, TEnvironment } from '@nextbnb/common';

/**
 * @public
 * Interface for the argument to be received when setting up the server
 */
export interface ISetupServerArgs {
  environment: TEnvironment;
  port: number;
  serviceName: Service;
  baseApiPath: string;
}
