import { LoggerUtils } from "@4irbnb/common";
import { User } from "../domains";
import { FullName } from "../domains/user/fields";
import { Types as RepositoryTypes } from "../repos/user";
import { Types as ServiceTypes } from "../services/types";

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

  public create(command: Commands.Create) {
    const newId = User.Entity.create({
      fullName: new FullName(),
    });
  }
}
