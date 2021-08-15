import { IStay } from "../domain";
import { INoSqlDatabaseService } from "@4irbnb/database";

export interface IStayService {
  get(params: IStayServiceGet): Promise<IStay | null>;
  post(params: IStayServicePost): Promise<void>;
  delete(params: IStayServiceDelete): Promise<void>;
  patch(params: IStayServicePatch): Promise<IStay>;
}

export interface IStayServiceConstructorParams {
  db: INoSqlDatabaseService;
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

export interface IWithIdentifierParams {
  identifier: string;
}
