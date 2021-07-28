import { ILoggerService, PackageEnum, ILambdaArgs } from "@nextbnb/common";
import { createLogger } from "@nextbnb/common";
import { isStay } from "../models";

export class StayController {
  // #service: IStayService;
  #logger: ILoggerService;
  // { db, idValidator }: IStayControllerConstructorParams
  constructor() {
    // this.#service = new StayService({ db, idValidator });
    this.#logger = createLogger({
      packageName: PackageEnum.stay,
      className: "StayController",
    });
  }

  // { identifier }: IStayControllerGetParams
  get = async ({ callback }: ILambdaArgs) => {
    const stay = {
      id: "3149209fgj09h2",
      title: "sdifjiosdjfoiwe",
      imgUrls: ["sdfjs", "fhfhw"],
    };
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        stay,
      }),
    });
    // try {
    //   // this.#service.get({ identifier });
    //   res
    //     .code(200)
    //     .header("Content-Type", "application/json; charset=utf-8")
    //     .send({ body: "stay service: GET" });
    // } catch (error) {
    //   this.#logger.error({ location: "get:get", message: error as string });
    //   res
    //     .code(400)
    //     .header("Content-Type", "application/json; charset=utf-8")
    //     .send({ body: error });
    // }
  };

  post = async ({ callback }: ILambdaArgs) => {
    try {
      // const stay = await this.#service.post({ data });
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({}),
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

  delete = async ({ callback }: ILambdaArgs) => {
    try {
      // const stay = await this.#service.delete({ identifier });

      callback(null, {
        statusCode: 200,
        body: JSON.stringify({}),
      });
    } catch (error) {
      console.error(`[@stay#deleteStayResponse/deleteStay]`);
      callback(
        {
          statusCode: 400,
          body: "Something went wrong",
        },
        null
      );
    }
  };

  async patch({ callback }: ILambdaArgs): Promise<void> {
    try {
      // const stay = await this.#service.patch({ identifier, data });
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
      console.error(`[@stay#patchStayResponse/patchStay]`);
      callback(
        {
          statusCode: 400,
          body: "Something went wrong",
        },
        null
      );
    }
  }
}
