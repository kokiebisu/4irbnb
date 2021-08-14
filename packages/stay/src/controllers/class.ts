import {
  ILoggerService,
  PackageEnum,
  createLoggerService,
} from "@4irbnb/common";
import { IStayControllerConstructorParams } from ".";
import { isStay } from "../domain";
import { IStayService, StayService } from "../services";
import {
  IStayControllerDeleteParams,
  IStayControllerGetParams,
  IStayControllerPatchParams,
  IStayControllerPostParams,
} from "./types";

/**
 * @public
 */
export class StayController {
  #service: IStayService;
  #logger: ILoggerService;

  constructor({ db, idValidator }: IStayControllerConstructorParams) {
    this.#service = new StayService({ db, idValidator });
    this.#logger = createLoggerService({
      packageName: PackageEnum.stay,
      className: "StayController",
    });
  }

  async get({ identifier }: IStayControllerGetParams): Promise<any> {
    try {
      const stay = await this.#service.get({ identifier });

      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: stay
          ? JSON.stringify({
              stay,
            })
          : null,
      };
    } catch (error) {
      this.#logger.error({ location: "get:get", message: "Entered" });
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

  async post({ data }: IStayControllerPostParams): Promise<any> {
    try {
      await this.#service.post({ data });
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
      };
    } catch (error) {
      this.#logger.error({ location: "get:get", message: error as string });
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: "Something went wrong",
      };
    }
  }

  async delete({ identifier }: IStayControllerDeleteParams): Promise<any> {
    try {
      await this.#service.delete({ identifier });

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
      };
    } catch (error) {
      this.#logger.error({
        location: "delete:delete",
        message: error as string,
      });
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: "Something went wrong",
      };
    }
  }

  async patch({ identifier, data }: IStayControllerPatchParams): Promise<any> {
    try {
      const stay = await this.#service.patch({
        identifier,
        data,
      });
      if (!isStay(stay)) {
        this.#logger.error({
          location: "patch:isStay",
          message: "Data was not a stay type",
        });
      }
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: stay,
      };
    } catch (error) {
      this.#logger.error({ location: "patch:patch", message: error as string });
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: "Something went wrong",
      };
    }
  }
}
