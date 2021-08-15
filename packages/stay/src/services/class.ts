import { IStayService, IStayServiceConstructorParams } from "./types";
import { ILoggerUtils, LoggerUtils } from "@4irbnb/common";
import { IStayRepo } from "../repos/types";
import { PACKAGE_NAME } from "../configs";
import { StayRepo } from "../repos/class";
import { stayA, stayB } from "../mocks";

export class StayService implements IStayService {
  #repo: IStayRepo;
  #idValidator: any;
  #logger: ILoggerUtils = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });

  private constructor({ repo, idValidator }: IStayServiceConstructorParams) {
    this.#repo = repo;
    this.#idValidator = idValidator;
    this.#logger.log({
      location: "constructor",
      message: "Successfully initialized...",
    });
    console.log(this.#repo);
    console.log(this.#idValidator);
  }

  /**
   * @public
   *
   * @returns
   */
  public static async initialize() {
    return new StayService({
      repo: await StayRepo.initialize(),
      idValidator: () => true,
    });
  }

  /**
   * @public
   */
  public async getStaysWithinGivenCoordinate() {}

  /**
   * @public
   */
  public async getStaysByCity() {}

  /**
   * @public
   */
  public async getStaysByCountry() {
    return [stayA, stayB];
  }

  /**
   * @public
   */
  public async getStaysByHostId() {}

  /**
   * @public
   */
  public async getStayDetail() {
    return stayA;
  }

  /**
   * @public
   */
  public async book() {}
}
