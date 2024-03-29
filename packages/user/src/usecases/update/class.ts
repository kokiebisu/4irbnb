import { LoggerUtils, PACKAGE_NAME, Identifier } from "@4irbnb/common";

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
    _: ServiceTypes.IService
  ) {
    this.#repo = repo;
  }
  public async execute(command: UpdateCommand) {
    const targetId = command.id;
    if (!targetId) {
      throw new Error("id property missing from command");
    }
    const user = await this.#repo.findById(new Identifier(targetId));
    if (!user) {
      throw new Error("Specified user not found");
    }
    const newEmail = command.email;
    if (newEmail) {
      user.changeEmail(newEmail);
    }
    await this.#repo.save(user);
  }
}
