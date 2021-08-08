import {
  IWithIdentifierParams,
  IWithDataParams,
  IRegion,
} from "@4irbnb/common";

export interface IResponse {
  statusCode: number;
  body: any;
}

export interface IUserControllerGetParams extends IWithIdentifierParams {}

export interface IUserControllerPostParams extends IWithDataParams {}

export interface IUserControllerPatchParams
  extends IWithIdentifierParams,
    IWithDataParams {}

export interface IUserControllerDeleteParams extends IWithIdentifierParams {}

export interface IUserControllerConstructorParams extends IRegion {}

export interface IUserControllerPayloadParams {
  payload: any;
}

export interface IUserControllerPatchParams
  extends IWithIdentifierParams,
    IWithDataParams {}
