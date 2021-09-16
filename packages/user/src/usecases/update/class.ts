import { LoggerUtils, PACKAGE_NAME, UniqueIdentifier } from "@4irbnb/common";

import { UpdateCommand } from "../../commands";
import { RepositoryTypes } from "../../repos";
import { ServiceTypes } from "../../services";
import { IUseCase } from "./types";

/**
 * @public
 */
export class UseCase implements IUseCase {
  #repo: RepositoryTypes.IRepository;
  #logger = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });

  public constructor(
    repo: RepositoryTypes.IRepository,
    service: ServiceTypes.IService
  ) {
    this.#repo = repo;
    this.#logger.log({
      location: "constructor",
      message: "Successfully initialized...",
    });
  }
  public async execute(command: UpdateCommand) {
    const targetId = command.id;
    if (!targetId) {
      throw new Error("id property missing from command");
    }
    const user = await this.#repo.findById(new UniqueIdentifier(targetId));
    if (!user) {
      throw new Error("Specified user not found");
    }
    const newEmail = command.email;
    if (newEmail) {
      user.changeEmail(newEmail);
    }
    this.#repo.save(user);
  }
}
