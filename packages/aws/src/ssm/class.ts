import * as AWS from 'aws-sdk';
import {
  ServiceEnum,
  TEnvironment,
} from '@nextbnb/common';
import {  AWSServiceError,
  AWSServiceEnum} from '@nextbnb/error';
import { Logger } from '@nextbnb/utils';

export class SSM {
  environment?: TEnvironment;
  serviceName?: ServiceEnum;
  logger: Logger;
  service: any;

  constructor(serviceName: ServiceEnum, environment: TEnvironment) {
    this.logger = new Logger({
      service: serviceName,
      level: 'info',
      environment,
    });
    this.service = new AWS.SSM();
  }

  async getServiceSecret(
    key: string,
    // value: string,
    includeEnvironment: boolean
  ): Promise<string> {
    const path = `/${this.serviceName as ServiceEnum}${
      includeEnvironment ? `/${this.environment as TEnvironment}` : ''
    }/${key}`;
    try {
      const value = await this.service.get(path, true);
      return value as string;
    } catch (err) {
      throw new AWSServiceError(AWSServiceEnum.ssm);
    }
  }

  async setServiceSecret(key: string, value: string): Promise<void> {
    const path = `/${this.serviceName as ServiceEnum}/${
      this.environment as TEnvironment
    }/${key}`;
    try {
      this.ssm.set(path, value, true);
    } catch (err) {
      throw new AWSServiceError(AWSServiceEnum.ssm);
    }
  }
}
