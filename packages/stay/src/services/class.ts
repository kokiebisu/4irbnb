import { IStayService } from "./types";
import { Stay } from "..";
import { IStayRepo } from "../repos/types";
import { ILoggerUtils, LoggerUtils, PACKAGE_NAME } from "../../../common/dist";

/**
 * @public
 * Domain Service for {@link @stay#Stay}. Supplements logic that cannot be enwrapped by the Stay entity.
 */
export class StayService implements IStayService {
  #repo: IStayRepo;
  #logger: ILoggerUtils = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });
  public constructor(repo: IStayRepo) {
    this.#repo = repo;
    this.#logger.log({
      location: "constructor",
      message: "Successfully initialized...",
    });
  }
  /**
   * @public Check if the provided stay already exists in the db
   */
  public exists(value: Stay) {
    throw new Error("Logic not implemented yet");
  }
}
