import { LoggerUtils } from "@4irbnb/common";
import { StayService } from "..";
import { PACKAGE_NAME } from "../configs";
import { StayRepo } from "../repos";
import { IStayRepo } from "../repos/types";
import { PStayUseCase } from "./types";

export class StayUseCase {
  #repo: IStayRepo;
  #idValidator: any;
  #logger = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });
  private constructor({ repo, idValidator }: PStayUseCase) {
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
    return new StayService(await StayRepo.initialize());
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
