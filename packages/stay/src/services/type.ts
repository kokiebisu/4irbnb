import { IStay } from "../models";
import { IDatabaseService, IWithIdentifierParams } from "@nextbnb/database";

export interface IStayService {
  get(params: IStayServiceGet): Promise<IStay>;
  post(params: IStayServicePost): Promise<void>;
  delete(params: IStayServiceDelete): Promise<void>;
  patch(params: IStayServicePatch): Promise<IStay>;
}

export interface IStayServiceConstructorParams {
  db: IDatabaseService;
  idValidator(): boolean;
}

export interface IStayServiceGet extends IWithIdentifierParams {}

export interface IStayServicePost {
  data: any;
}

export interface IStayServiceDelete extends IWithIdentifierParams {}

export interface IStayServicePatch extends IWithIdentifierParams {
  data: any;
}
