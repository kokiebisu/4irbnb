import { IService } from "./types";
import {
  ILoggerUtils,
  LoggerUtils,
  PACKAGE_NAME,
} from "../../../../common/dist";

/**
 * @public Domain Service for {@link @stay#Stay}. Supplements logic that cannot be enwrapped by the Stay entity.
 */
export class Service implements IService {
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
    return new Service(repo);
  }

  /**
   * @public Checks if the provided stay already exists in the db by the title
   * @access public
   *
   * @remarks
   * This method should be placed here because it is under the Stay domain rule:
   * 'There should be no duplicate stays'
   */
  public exists(stay: StayTypes.IEntityProps) {
    const result = this.#repo.findByTitle(stay.title);
    return !!result;
  }
}
