import { LoggerUtils, Identifier } from "@4irbnb/common";
import { CreateCommand } from "../../commands";
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
   * @public
   * @param repo
   * @param service
   */
  public execute(command: CreateCommand) {
    const newId = new Identifier();
    // const service =
    // if (command.title) {
    //   Stay.create({
    //     title: command.title,
    //   });
    // }
  }
}
