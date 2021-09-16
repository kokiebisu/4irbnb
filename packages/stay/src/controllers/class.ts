import { LoggerUtils, ILoggerUtils } from "@4irbnb/common";
import { PACKAGE_NAME } from "../config";

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
}
