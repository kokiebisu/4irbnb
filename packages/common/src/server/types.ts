import { IEnvironment } from "..";
import { HttpMethods, IServiceName } from "../enum";
import { FastifyRequest, FastifyReply } from "fastify";

/**
 * @public
 */
export interface IServer {
  setup(): Promise<void>;
  registerRoute(params: IRegisterRouteParams): void;
  listen(port: IListenParams): Promise<void>;
}

/**
 * @public
 */
export interface IConstructorParams extends IEnvironment, IServiceName {
  server: any;
}

/**
 * @public
 */
export interface IRegisterRouteParams {
  method: HttpMethods;
  path: string;
  handler(req: any, res: any): any;
}

/**
 * @public
 */
export interface IListenParams {
  port: number;
}

/**
 * @public
 */
export interface ICreateServerParams extends IEnvironment, IServiceName {}

export type TRequest = FastifyRequest;

export type TResponse = FastifyReply;
