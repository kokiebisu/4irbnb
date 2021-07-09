import { ServiceEnum, TEnvironment } from '@nextbnb/common';

export type TDatabaseClient = 'mongo';
export interface IMongo {
  environment: TEnvironment;
  serviceName: ServiceEnum;
  options?: any;
}

export interface IMongoConstructor {
  environment: TEnvironment;
  providedPackage: any;
  serviceName: ServiceEnum;
  options?: any;
}
