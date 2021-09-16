import { LoggerUtils } from "@4irbnb/common";
import { CreateCommand, UpdateCommand } from "../commands";
import { PACKAGE_NAME } from "../config";
import { Entity } from "../domains";
import { Email, FullName } from "../domains/fields";
import { RepositoryTypes } from "../repos";
import { ServiceTypes } from "../services";

/**
 * @public
 */
export class UseCase {
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

  public async create(command: CreateCommand) {
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
      fullName: FullName.create(newFirstName, newLastName),
      email: Email.create(newEmail),
    });
    await this.#repo.save(newUser);
  }

  public async update(command: UpdateCommand) {
    const newEmail = command.email;
  }
}
