import { IUser } from '../model';

/**
 * @public
 * Interface of Permission
 */
interface IPermission {
  entityType: string;
  type: string;
}

/**
 * @public
 * Interface of Header
 */
interface IHeader {
  authorization: string;
  eventType?: { sourceService: string; entityType: string; type: string };
}

/**
 * @public
 * Interface of the request property in Context
 */
interface IContextRequest {
  header: IHeader;
  body: any;
}

/**
 * @public
 * Interface of the response property in Context
 */
interface IContextResponse {
  header: IHeader;
  status: number;
  body: any;
}

/**
 * @public
 * Interface of the serviceRoles property in Context
 */
export interface IRole {
  type: string;
  permissions: IPermission[];
}

/**
 * @public
 * Interface of the Context
 */
export interface IContext {
  state: {
    user?: IUser;
  };
  status: number;
  request: IContextRequest;
  response: IContextResponse;
  params?: { [key: string]: any };
  serviceRoles?: IRole[];
}
