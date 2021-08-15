import { LoggerUtils, ILoggerUtils } from "@4irbnb/common";
import { PACKAGE_NAME } from "../configs";
// import { IStayService, StayService } from "../services";
// import { IStayControllerGetParams } from "./types";

/**
 * @public
 */
export class StayController {
  // #service: IStayService;
  #logger: ILoggerUtils = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });

  private constructor() {
    // this.#service = StayService.initialize();
    this.#logger.log({
      location: "constructor",
      message: "Successfully initialized...",
    });
  }

  public static initialize() {
    return new StayController();
  }

  async getStaysByCategory(): Promise<any> {
    try {
      // const stay = await this.#service.get({ identifier });

      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: "Success",
        // body: stay
        //   ? JSON.stringify({
        //       stay,
        //     })
        //   : null,
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
}
