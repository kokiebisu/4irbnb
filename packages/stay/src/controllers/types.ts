import {
  IDatabaseService,
  IWithIdentifierParams,
  IWithDataParams,
} from "@nextbnb/common";

export interface IResponse {
  statusCode: number;
  body: any;
}

export interface IStayControllerGetParams extends IWithIdentifierParams {}

export interface IStayControllerPostParams extends IWithDataParams {}

export interface IStayControllerPatchParams
  extends IWithIdentifierParams,
    IWithDataParams {}

export interface IStayControllerDeleteParams extends IWithIdentifierParams {}

export interface IStayControllerConstructorParams {
  db: IDatabaseService;
  idValidator({ identifier }: IWithIdentifierParams): boolean;
}

export interface IStayControllerPayloadParams {
  payload: any;
}

export interface IStayControllerPatchParams
  extends IWithIdentifierParams,
    IWithDataParams {}
