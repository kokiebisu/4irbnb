import {
  IUserService,
  IUserServiceConstructorParams,
  IUserServiceGetParams,
} from "./types";
import { IDatabaseService, InternalError } from "@nextbnb/common";
import {
  createLoggerService,
  ILoggerService,
  PackageEnum,
} from "@nextbnb/common";
import { isUser } from "../utils";
import { IUser } from "..";

export class UserService implements IUserService {
  #db: IDatabaseService;
  #idValidator: any;
  #tableName: string;
  #logger: ILoggerService;
  constructor({ db, idValidator }: IUserServiceConstructorParams) {
    this.#db = db;
    this.#idValidator = idValidator;
    this.#tableName = "StayService";
    this.#logger = createLoggerService({
      packageName: PackageEnum.stay,
      className: "StayService",
    });
  }

  async get({ identifier }: IUserServiceGetParams): Promise<IUser | null> {
    try {
      if (!this.#idValidator({ identifier })) {
        throw new InternalError({
          location: "get:idValidator",
          message: "Must be a valid id",
        });
      }
      const user = await this.#db.findOne({
        tableName: this.#tableName,
        identifier,
      });

      if (!user) {
        return null;
      }

      if (!isUser(user)) {
        throw new InternalError({
          location: "get:isStay",
          message: "Not a valid stay was retrieved",
        });
      }
      return user;
    } catch (error) {
      if (error instanceof InternalError) {
        const { location, message } = error;
        this.#logger.error({
          location,
          message,
        });
      } else {
        this.#logger.error({
          location: "get:findOne",
          message: error as string,
        });
      }
      return null;
    }
  }
}
