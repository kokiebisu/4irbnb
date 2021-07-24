import { Logger } from "@nextbnb/utils";
import { TEnvironment, ServiceEnum } from "@nextbnb/common";
import { FastifyInstance } from "fastify";
import { HttpMethods } from "../enum";

// export interface IServer {
//   logger: Logger;
//   environment: TEnvironment;
//   serviceName: ServiceEnum;
//   server: FastifyInstance;
//   port: number;
// }

export interface IServer {
  setup(): Promise<void>;
  registerRoute(params: IRegisterRouteParams): void;
  listen(port: IListenParams): Promise<void>;
}

export interface IConstructorParams {
  server: any;
  environment: TEnvironment;
  serviceName: ServiceEnum;
}

export interface IRegisterRouteParams {
  method: HttpMethods;
  path: string;
  handler: any;
  schema?: any;
}

export interface IListenParams {
  port: number;
}
