import { IDatabaseService, IWithIdentifierParams } from "@nextbnb/common";

export interface IUserService {}

export interface IUserServiceConstructorParams {
  db: IDatabaseService;
  idValidator(): boolean;
}

export interface IUserServiceGetParams extends IWithIdentifierParams {}
