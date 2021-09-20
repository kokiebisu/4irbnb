import { LoggerUtils, Identifier } from "@4irbnb/common";
import { ResignCommand } from "../../commands";
import { PACKAGE_NAME } from "../../config";
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
  public async execute(command: ResignCommand) {
    const targetId = command.id;
    if (!targetId) {
      throw new Error("id property missing from command");
    }
    const user = await this.#repo.findById(new Identifier(targetId));
    if (!user) {
      throw new Error("Specified user not found");
    }
    this.#repo.delete(user);
  }
}
