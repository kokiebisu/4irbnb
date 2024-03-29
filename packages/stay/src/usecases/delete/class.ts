import { LoggerUtils, Identifier } from "@4irbnb/common";
import { DeleteCommand } from "../../commands";
import { PACKAGE_NAME } from "../../config";
import { RepositoryTypes } from "../../repos";
import { ServiceTypes } from "../../services";
import { IUseCase } from "./types";

/**
 * @public
 */
export class UseCase implements IUseCase {
  #repo: RepositoryTypes.IRepository;
  #service: ServiceTypes.IService;
  #logger = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });

  /**
   * @public Constructs the UseCase
   * @param repo
   * @param service
   */
  public constructor(
    repo: RepositoryTypes.IRepository,
    service: ServiceTypes.IService
  ) {
    this.#repo = repo;
    this.#logger.log({
      location: "constructor",
      message: "Successfully initialized...",
    });
    this.#repo = repo;
    this.#service = service;
  }

  public async execute(command: DeleteCommand) {
    const targetId = command.id;
    if (!targetId) {
      throw new Error("Id property was not found from the DeleteCommand");
    }
    var stay = await this.#repo.findById(new Identifier(targetId));
    if (!stay) {
      throw new Error("Stay was not found");
    }

    this.#repo.delete(stay);
  }
}
