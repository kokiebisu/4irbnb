import { ILoggerService, PackageEnum, ILambdaArgs } from "@nextbnb/common";
import { createLogger } from "@nextbnb/common";
import { IStayControllerConstructorParams } from ".";
import { isStay } from "../models";
import { IStayService, StayService } from "../services";

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

  get = async ({ callback }: ILambdaArgs): Promise<void> => {
    const identifier = {
      KEY: {
        stayId: {
          S: "fsdafsdaf",
        },
      },
      ProjectionExpression: "title",
    };

    const stay = await this.#service.get({ identifier });

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        stay,
      }),
    });
  };

  post = async ({ callback, event }: ILambdaArgs): Promise<void> => {
    try {
      const stay = await this.#service.post({ data: event.data });
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          stay,
        }),
      });
    } catch (error) {
      this.#logger.error({ location: "get:get", message: error as string });
      callback(
        {
          statusCode: 400,
          body: "Something went wrong",
        },
        null
      );
    }
  };

  delete = async ({ callback }: ILambdaArgs): Promise<void> => {
    try {
      // const stay = await this.#service.delete({ identifier: event.data });

      callback(null, {
        statusCode: 200,
        body: JSON.stringify({}),
      });
    } catch (error) {
      this.#logger.error({
        location: "delete:delete",
        message: error as string,
      });
      callback(
        {
          statusCode: 400,
          body: "Something went wrong",
        },
        null
      );
    }
  };

  patch = async ({ callback }: ILambdaArgs): Promise<void> => {
    try {
      // const stay = await this.#service.patch({
      //   identifier: event.data.id,
      //   data: event.data.data,
      // });
      const stay = {
        id: "2309ru90jg9",
        title: "A good house",
        imgUrls: ["asfjiosdajfoi", "sfhaiusdhfiusa"],
      };
      if (!isStay(stay)) {
        this.#logger.error({
          location: "patch:isStay",
          message: "Data was not a stay type",
        });
      }
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({}),
      });
    } catch (error) {
      this.#logger.error({ location: "patch:patch", message: error as string });
      callback(
        {
          statusCode: 400,
          body: "Something went wrong",
        },
        null
      );
    }
  };
}
