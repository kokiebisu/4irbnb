import { Logger } from '@nextbnb/utils';
import { TEnvironment, ServiceEnum } from '@nextbnb/common';
import { FastifyInstance } from 'fastify';

export interface IServer {
  logger: Logger;
  environment: TEnvironment;
  serviceName: ServiceEnum;
  server: FastifyInstance;
  port: number;
}
