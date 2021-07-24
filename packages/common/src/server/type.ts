import { IEnvironment } from "..";
import { HttpMethods, IServiceName } from "../enum";

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
  handler: any;
  schema?: any;
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
