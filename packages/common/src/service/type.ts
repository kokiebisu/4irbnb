import { IUser } from '../model';

interface IPermission {
  entityType: string;
  type: string;
}

interface IHeader {
  authorization: string;
  eventType?: { sourceService: string; entityType: string; type: string };
}

interface IContextRequest {
  header: IHeader;
  body: any;
}

interface IContextResponse {
  header: IHeader;
  status: number;
  body: any;
}

export interface IRole {
  type: string;
  permissions: IPermission[];
}

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
