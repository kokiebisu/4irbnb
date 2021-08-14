import { IStay } from "../domain";
import { IDatabaseService, IWithIdentifierParams } from "@4irbnb/common";

export interface IStayService {
  get(params: IStayServiceGet): Promise<IStay | null>;
  post(params: IStayServicePost): Promise<void>;
  delete(params: IStayServiceDelete): Promise<void>;
  patch(params: IStayServicePatch): Promise<IStay>;
}

export interface IStayServiceConstructorParams {
  db: IDatabaseService;
  idValidator({ identifier }: IWithIdentifierParams): boolean;
}

export interface IStayServiceGet extends IWithIdentifierParams {}

export interface IStayServicePost {
  data: IStay;
}

export interface IStayServiceDelete extends IWithIdentifierParams {}

export interface IStayServicePatch extends IWithIdentifierParams {
  data: IStay;
}
