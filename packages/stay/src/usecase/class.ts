import { LoggerUtils, UniqueIdentifier } from "@4irbnb/common";
import { PACKAGE_NAME } from "../config";
import { Types as RepositoryTypes } from "../repos/stay";
import { Types as ServiceTypes } from "../services/stay";
import { DataTransferObject } from "../dtos/stay";
import { CreateCommand, DeleteCommand, UpdateCommand } from "../commands";

export class UseCase {
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
  public create(command: CreateCommand) {
    const newId = new UniqueIdentifier();
    // const service =
    // if (command.title) {
    //   Stay.create({
    //     title: command.title,
    //   });
    // }
  }

  /**
   * @public Updates the Stay domain object persisted in the datastore.
   * @access public
   * @param command
   */
  public async update(command: UpdateCommand) {
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

  public async delete(command: DeleteCommand) {
    const targetId = command.id;
    if (!targetId) {
      throw new Error("Id property was not found from the DeleteCommand");
    }
    var stay = await this.#repo.findById(new UniqueIdentifier(targetId));
    if (!stay) {
      throw new Error("Stay was not found");
    }

    this.#repo.delete(stay);
  }

  public async findStayById(stayId: string) {
    const targetId = new UniqueIdentifier(stayId);
    const stay = await this.#repo.findById(targetId);
    if (!stay) {
      return null;
    }
    return new DataTransferObject(stay);
  }

  /**
   * @public
   */
  public async getStaysWithinGivenCoordinate() {
    throw new Error("Logic not implemented yet");
  }

  /**
   * @public
   */
  public async getStaysByCity() {
    throw new Error("Logic not implemented yet");
  }

  /**
   * @public
   */
  public async getStaysByCountry() {
    throw new Error("Logic not implemented yet");
  }

  /**
   * @public
   */
  public async getStaysByHostId() {
    throw new Error("Logic not implemented yet");
  }

  /**
   * @public
   */
  public async getStayDetail() {
    throw new Error("Logic not implemented yet");
  }

  /**
   * @public
   */
  public async book() {
    throw new Error("Logic not implemented yet");
  }
}
