import { ILoggerService, PackageEnum } from "@nextbnb/common";
import { createLoggerService } from "@nextbnb/common";
import { IUserService } from "..";
import { createUserService } from "../services/factory";
import {
  IUserControllerConstructorParams,
  IUserControllerGetParams,
} from "./types";

/**
 * @public
 */
export class UserController {
  #service: IUserService;
  #logger: ILoggerService;

  constructor({ region }: IUserControllerConstructorParams) {
    this.#service = createUserService({ region });
    this.#logger = createLoggerService({
      packageName: PackageEnum.stay,
      className: "UserController",
    });
  }

  async checkIfExistsByEmail({
    identifier,
  }: IUserControllerGetParams): Promise<any> {
    try {
      const user = await this.#service.get({ identifier });

      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          exists: !!user,
        }),
      };
    } catch (error) {
      this.#logger.error({
        location: "checkIfExistsByEmail:get",
        message: "Entered",
      });
      return {
        statusCode: 500,
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          error: "Internal Error",
        },
      };
    }
  }
}
