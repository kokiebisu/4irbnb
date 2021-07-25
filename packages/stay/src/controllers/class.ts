import {
  ILoggerService,
  PackageEnum,
  TRequest,
  TResponse,
} from "@nextbnb/common";
import { createLogger } from "@nextbnb/common";

export class StayController {
  // #service: IStayService;
  // { db, idValidator }: IStayControllerConstructorParams
  logger: ILoggerService;

  constructor() {
    // this.#service = new StayService({ db, idValidator });
    this.logger = createLogger({
      packageName: PackageEnum.stay,
      className: "StayController",
    });
  }

  // { identifier }: IStayControllerGetParams
  async get(_: any, res: any): Promise<any> {
    try {
      // const stay = await this.#service.get({ identifier });
      await this.logger.log({
        location: "get:get",
        message: "Incoming into get method",
      });

      res
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({ body: "stay service: GET" });
      console.log("ENER2");
    } catch (error) {
      res
        .code(400)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({ body: "Error" });
    }
  }

  post(_req: TRequest, res: TResponse): any {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      // const stay = await this.#service.post({ data });
      res.send({
        headers,
        statusCode: 200,
        body: "stay service: POST",
      });
    } catch (error) {
      console.error(`[@stay#postStayResponse/postStay]`);
      res.send({
        headers,
        statusCode: 400,
        body: {
          error,
        },
      });
    }
  }

  delete(_req: TRequest, res: TResponse): any {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      // const stay = await this.#service.delete({ identifier });
      res.send({
        headers,
        statusCode: 200,
        body: "stay service: DELETE",
      });
    } catch (error) {
      console.error(`[@stay#deleteStayResponse/deleteStay]`);
      res.send({
        headers,
        statusCode: 400,
        body: {
          error,
        },
      });
    }
  }

  // async patch({
  //   identifier,
  //   data,
  // }: IStayControllerPatchParams): Promise<IResponse> {
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };
  //   try {
  //     const stay = await this.#service.patch({ identifier, data });
  //     return {
  //       headers,
  //       statusCode: 200,
  //       body: stay,
  //     };
  //   } catch (error) {
  //     console.error(`[@stay#patchStayResponse/patchStay]`);
  //     return {
  //       headers,
  //       statusCode: 400,
  //       body: {
  //         error,
  //       },
  //     };
  //   }
  // }
}
