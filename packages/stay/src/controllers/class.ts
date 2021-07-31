import { ILoggerService, PackageEnum } from "@nextbnb/common";
import { createLogger } from "@nextbnb/common";
import { IStayControllerConstructorParams } from ".";
import { IStayService, StayService } from "../services";
import {
  IStayControllerDeleteParams,
  IStayControllerGetParams,
  IStayControllerPostParams,
} from "./types";

export class StayController {
  #service: IStayService;
  #logger: ILoggerService;

  constructor({ db, idValidator }: IStayControllerConstructorParams) {
    this.#service = new StayService({ db, idValidator });
    this.#logger = createLogger({
      packageName: PackageEnum.stay,
      className: "StayController",
    });
  }

  async get({ identifier }: IStayControllerGetParams): Promise<any> {
    try {
      const stay = await this.#service.get({ identifier });

      return {
        statusCode: 200,
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
      };
    } catch (error) {
      this.#logger.error({ location: "get:get", message: error as string });
      return {
        statusCode: 400,
        body: "Something went wrong",
      };
    }
  }

  async delete({ identifier }: IStayControllerDeleteParams): Promise<any> {
    try {
      await this.#service.delete({ identifier });

      return {
        statusCode: 200,
      };
    } catch (error) {
      this.#logger.error({
        location: "delete:delete",
        message: error as string,
      });
      return {
        statusCode: 400,
        body: "Something went wrong",
      };
    }
  }

  // patch = async ({ callback }: IStayControllerPatchParams): Promise<void> => {
  //   try {
  //     // const stay = await this.#service.patch({
  //     //   identifier: event.data.id,
  //     //   data: event.data.data,
  //     // });
  //     const stay = {
  //       id: "2309ru90jg9",
  //       title: "A good house",
  //       imgUrls: ["asfjiosdajfoi", "sfhaiusdhfiusa"],
  //     };
  //     if (!isStay(stay)) {
  //       this.#logger.error({
  //         location: "patch:isStay",
  //         message: "Data was not a stay type",
  //       });
  //     }
  //     callback(null, {
  //       statusCode: 200,
  //       body: JSON.stringify({}),
  //     });
  //   } catch (error) {
  //     this.#logger.error({ location: "patch:patch", message: error as string });
  //     callback(
  //       {
  //         statusCode: 400,
  //         body: "Something went wrong",
  //       },
  //       null
  //     );
  //   }
  // };
}
