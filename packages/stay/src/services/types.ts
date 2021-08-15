import { IStay } from "../domains";
import { IStayRepo } from "../repos/types";

export interface IStayService {}

export interface IStayServiceConstructorParams {
  repo: IStayRepo;
  idValidator({ identifier }: IWithIdentifierParams): boolean;
}

export interface IWithIdentifierParams {
  identifier: string;
}
