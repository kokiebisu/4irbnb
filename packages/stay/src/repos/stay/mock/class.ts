import { UniqueIdentifier } from "@4irbnb/common";
import { Entity, Fields, Types } from "../../../domains/stay";
import { StayData } from "../../../dto";
import { IRepository } from "../types";

/**
 * @public Enwraps the logics for persisting the {@link @stay#Stay} domain object and recreating the domain object from the datastore under the dev environment
 */
export class Repository implements IRepository {
  #client: { [key: string]: StayData };

  /**
   * @public Constructs the Repository
   * @access private
   */
  private constructor() {
    this.#client = {};
  }

  /**
   * @public Initializes the Repository class
   * @access public
   * @returns
   */
  public async initialize() {
    return new Repository();
  }

  /**
   * @public Retrieves the Stay domain object by their id
   * @access public
   * @param id
   */
  public async findById(id: UniqueIdentifier) {
    const idInString = id.toString();
    if (!this.#client[idInString]) {
      return null;
    }
    return Entity.create(this.#client[idInString]);
  }

  /**
   * @public Retrieves all the Stay domain object by their title
   * @access public
   * @param title
   */
  public async findByTitle(title: Fields.Title) {
    const stay = Object.values(this.#client).find((stay) =>
      stay.title.equals(title)
    );
    if (!stay) {
      return null;
    }
    return Entity.create(stay);
  }

  /**
   * @public Saves the provided domain object which enables persistence
   * @access public
   * @param stay
   */
  public async save(stay: Entity) {
    const identifierAsString = stay.id.toString();
    const data = new StayData(stay);
    this.#client[identifierAsString] = data;
  }

  /**
   * @public Removes the domain object from the datastore. This stops the domain object from persisting.
   * @access public
   * @param stay
   */
  public async delete(stay: Entity) {
    throw new Error("Logic not implemented yet");
  }
}
