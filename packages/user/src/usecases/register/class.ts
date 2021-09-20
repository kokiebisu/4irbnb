import { LoggerUtils } from "@4irbnb/common";
import { IUseCase } from ".";
import { RegisterCommand } from "../../commands";
import { PACKAGE_NAME } from "../../config";
import { Fields } from "../../domains";
import { FactoryTypes } from "../../factory";
import { RepositoryTypes } from "../../repos";
import { ServiceTypes } from "../../services";

/**
 * @public
 */
export class UseCase implements IUseCase {
  #factory: FactoryTypes.IFactory;
  #repo: RepositoryTypes.IRepository;

  public constructor(
    factory: FactoryTypes.IFactory,
    repo: RepositoryTypes.IRepository,
    _: ServiceTypes.IService
  ) {
    this.#factory = factory;
    this.#repo = repo;
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

    const newUser = this.#factory.create({
      fullName: Fields.FullName.create(newFirstName, newLastName),
      email: Fields.Email.create(newEmail),
    });

    await this.#repo.save(newUser);
  }
}
