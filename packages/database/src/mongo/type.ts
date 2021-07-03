import { Service, TEnvironment } from '@nextbnb/common';

export type TDatabaseClient = 'mongo';
export interface IMongo {
  environment: TEnvironment;
  providedPackage: any;
  serviceName: Service;
  options?: any;
}

export interface IMongoConstructor {
  environment: TEnvironment;
  providedPackage: any;
  serviceName: Service;
  options?: any;
}
