import * as AWS from 'aws-sdk';
import {
  ServiceEnum,
  TEnvironment,
  AWSServiceError,
  AWSServiceEnum,
} from '@nextbnb/common';
import { Logger } from '../logger';

export class Config {
  environment?: TEnvironment;
  serviceName?: ServiceEnum;
  logger: Logger;
  ssm: any;

  constructor(serviceName: ServiceEnum, environment: TEnvironment) {
    this.logger = new Logger({
      service: serviceName,
      level: 'info',
      environment,
    });
    this.ssm = new AWS.SSM();
  }

  async getServiceSecret(
    key: string,
    value: string,
    includeEnvironment: boolean
  ): Promise<string> {
    const path = `/${this.serviceName as ServiceEnum}${
      includeEnvironment ? `/${this.environment as TEnvironment}` : ''
    }/${key}`;
    try {
      const value = await this.ssm.get(path, true);
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
