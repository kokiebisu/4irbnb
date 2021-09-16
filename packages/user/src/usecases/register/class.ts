import { LoggerUtils } from "@4irbnb/common";
import { IUseCase } from ".";
import { RegisterCommand } from "../../commands";
import { PACKAGE_NAME } from "../../config";
import { Entity, Fields } from "../../domains";
import { RepositoryTypes } from "../../repos";
import { ServiceTypes } from "../../services";

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

  public async execute(command: RegisterCommand) {
    const newFirstName = command.firstName;
    if (!newFirstName) {
      throw new Error("firstName not included");
    }
    const newLastName = command.lastName;
    if (!newLastName) {
      throw new Error("lastName not included");
    }
    const newEmail = command.email;
    if (!newEmail) {
      throw new Error("Email property not included");
    }
    const newUser = Entity.create({
      fullName: Fields.FullName.create(newFirstName, newLastName),
      email: Fields.Email.create(newEmail),
    });
    await this.#repo.save(newUser);
  }
}
