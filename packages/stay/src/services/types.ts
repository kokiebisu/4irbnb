import { IStay } from "../domain";
import { IStayRepo } from "../repo/types";

export interface IStayService {}

export interface IStayServiceConstructorParams {
  repo: IStayRepo;
  idValidator({ identifier }: IWithIdentifierParams): boolean;
}

export interface IWithIdentifierParams {
  identifier: string;
}
