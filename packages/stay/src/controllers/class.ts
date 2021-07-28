import {
  ILoggerService,
  PackageEnum,
  TRequest,
  TResponse,
} from "@nextbnb/common";
import { createLogger } from "@nextbnb/common";
// import { StayService } from "../services";
// import { IStayControllerConstructorParams } from "./types";

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
  get = async () => {
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
    return {
      something: "IMPORTANT",
    };
  };

  post = async (_req: TRequest, res: TResponse) => {
    try {
      // const stay = await this.#service.post({ data });
      res
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({ body: "stay service: GET" });
    } catch (error) {
      this.#logger.error({ location: "get:get", message: error as string });
      res
        .code(400)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({ body: error });
    }
  };

  delete = async (_req: TRequest, res: TResponse) => {
    try {
      // const stay = await this.#service.delete({ identifier });
      // res
      //   .code(200)
      //   .header("Content-Type", "application/json; charset=utf-8")
      //   .send({ body: stay });
    } catch (error) {
      console.error(`[@stay#deleteStayResponse/deleteStay]`);
      res
        .code(400)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({ body: error });
    }
  };

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
