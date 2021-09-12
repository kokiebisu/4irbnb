import { LoggerUtils } from "@4irbnb/common";
import { PACKAGE_NAME } from "../configs";
import { IStayRepository } from "../repos/types";
import { IStayService } from "../services";

export class UseCase {
  #repo: IStayRepository;
  #service: IStayService;
  #logger = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });

  /**
   * @public Constructs the UseCase
   * @param repo
   * @param service
   */
  private constructor(repo: IStayRepository, service: IStayService) {
    this.#repo = repo;
    this.#logger.log({
      location: "constructor",
      message: "Successfully initialized...",
    });
    this.#repo = repo;
    this.#service = service;
  }

  /**
   * @public Initializes the Stay domain use case
   * @access public
   */
  public static async initialize(repo: IStayRepository, service: IStayService) {
    return new UseCase(repo, service);
  }

  /**
   * @public
   */
  public async getStaysWithinGivenCoordinate() {
    throw new Error("Logic not implemented yet");
  }

  /**
   * @public
   */
  public async getStaysByCity() {
    throw new Error("Logic not implemented yet");
  }

  /**
   * @public
   */
  public async getStaysByCountry() {
    throw new Error("Logic not implemented yet");
  }

  /**
   * @public
   */
  public async getStaysByHostId() {
    throw new Error("Logic not implemented yet");
  }

  /**
   * @public
   */
  public async getStayDetail() {
    throw new Error("Logic not implemented yet");
  }

  /**
   * @public
   */
  public async book() {
    throw new Error("Logic not implemented yet");
  }
}
