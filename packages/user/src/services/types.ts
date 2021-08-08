import { IDatabaseService, IWithIdentifierParams } from "@nextbnb/common";
import { IUser } from "..";

/**
 * @public
 * Comment here...
 */
export interface IUserService {
  get({ identifier }: IUserServiceGetParams): Promise<IUser | null>;
}

/**
 * @public
 * Comment here...
 */
export interface IUserServiceConstructorParams {
  db: IDatabaseService;
  idValidator(): boolean;
}

/**
 * @public
 * Comment here...
 */
export interface IUserServiceGetParams extends IWithIdentifierParams {}
