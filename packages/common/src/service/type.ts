import { IUser } from '../model';

interface IHeader {
  authorization: string;
  eventType?: { sourceService: string; entityType: string; type: string };
}

interface IContextRequest {
  header: IHeader;
  body: any;
}

export interface IContext {
  state: {
    user?: IUser;
  };
  status: number;
  request: IContextRequest;
  response: IContextResponse;
  params?: { [key: string]: any };
  serviceRoles?: Role[];
}
