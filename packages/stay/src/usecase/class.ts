import { LoggerUtils, UniqueIdentifier } from "@4irbnb/common";
import { PACKAGE_NAME } from "../configs";
import { IStayRepository } from "../repos/types";
import { IStayService } from "../services";
import { Command as StayCommand } from "..";
import { Mock, Production } from "../repos";
import { StayData } from "../dto/class";

export class UseCase {
  #repo: IStayRepository;
  #service: IStayService;
  #logger = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });

  /**
   * @public Constructs the UseCase
   * @param repo
   * @param service
   */
  private constructor(repo: IStayRepository, service: IStayService) {
    this.#repo = repo;
    this.#logger.log({
      location: "constructor",
      message: "Successfully initialized...",
    });
    this.#repo = repo;
    this.#service = service;
  }

  /**
   * @public Initializes the Stay domain use case
   * @access public
   */
  public static async initialize(repo: IStayRepository, service: IStayService) {
    return new UseCase(repo, service);
  }

  /**
   * @public Updates the Stay domain object persisted in the datastore.
   * @access public
   * @param command
   */
  public async update(command: StayCommand.UpdateCommand) {
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

  public async delete(command: StayCommand.DeleteCommand) {
    const targetId = command.id;
    if (!targetId) {
      throw new Error("Id property was not found from the DeleteCommand");
    }
    var stay = await this.#repo.findById(targetId);
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
    return new StayData(stay);
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
