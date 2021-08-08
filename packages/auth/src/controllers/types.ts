import { IAuthService } from "../services/types";

export interface IAuthControllerConstructorParams {
  service: IAuthService;
}

export interface IAuthControllerAuthorizeParams {
  authorization: string;
  resource: string;
}
