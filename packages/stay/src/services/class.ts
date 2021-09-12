import { IStayService } from "./types";
import { ILoggerUtils, LoggerUtils, PACKAGE_NAME } from "../../../common/dist";
import { IStayRepository } from "../repos/types";
import { IStay } from "../domains/types";

/**
 * @public Domain Service for {@link @stay#Stay}. Supplements logic that cannot be enwrapped by the Stay entity.
 */
export class StayService implements IStayService {
  #repo: IStayRepository;
  #logger: ILoggerUtils = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });

  /**
   * @public Constructs the Stay service
   * @access private
   * @param repo
   */
  private constructor(repo: IStayRepository) {
    this.#repo = repo;
    this.#logger.log({
      location: "constructor",
      message: "Successfully initialized...",
    });
  }

  /**
   * @public Initializes the Stay service by attaching the repository
   * @access public
   * @param repo
   */
  public initialize(repo: IStayRepository) {
    return new StayService(repo);
  }

  /**
   * @public Checks if the provided stay already exists in the db
   * @access public
   */
  public exists(stay: IStay) {
    const result = this.#repo.findById(stay.id);
    return !!result;
  }
}
