import { Service } from '@nextbnb/common';

export interface IMongo {
  environment: string;
  providedPackage: any;
  serviceName: Service;
  options?: any;
}
