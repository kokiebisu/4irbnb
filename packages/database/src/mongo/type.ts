import { Service, TEnvironment } from '@nextbnb/common';

export interface IMongo {
  environment: TEnvironment;
  providedPackage: any;
  serviceName: Service;
  options?: any;
}
