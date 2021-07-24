export interface IResponse {
  headers: {
    "Content-Type": string;
  };
  statusCode: number;
  body: any;
}

export interface IStayControllerGetParams {
  id: string;
}

export interface IStayControllerPostParams {
  id: string;
}

export interface IStayControllerPatchParams {
  id: string;
  data: any;
}

export interface IStayControllerDeleteParams {
  id: string;
}

export interface IStayControllerConstructorParams {
  db: IDatabaseService;
}
