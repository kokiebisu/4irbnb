export interface IResponse {
  headers: {
    "Content-Type": string;
  };
  statusCode: number;
  body: any;
}

export interface IControllerGet {
  id: string;
}

export interface IControllerPost {
  id: string;
}

export interface IControllerPatch {
  id: string;
  data: any;
}

export interface IControllerDelete {
  id: string;
}
