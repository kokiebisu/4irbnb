import { LoggerUtils, UniqueIdentifier } from "@4irbnb/common";
import { UpdateCommand } from "../../commands";
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

  /**
   * @public Updates the Stay domain object persisted in the datastore.
   * @access public
   * @param command
   */
  public async execute(command: UpdateCommand) {
    const targetId = command.id;
    if (!targetId) {
      throw new Error("Id property was not found from the UpdateComand");
    }

    const stay = await this.#repo.findById(new UniqueIdentifier(targetId));
    if (!stay) {
      throw new Error("Stay was not found from the provided id");
    }

    if (command.title) {
      stay.changeTitle(command.title);
    }

    this.#repo.save(stay);
  }
}
