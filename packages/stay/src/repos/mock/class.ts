import { UniqueIdentifier } from "@4irbnb/common";
import { Title } from "../../domains/fields";
import { IStay } from "../../domains/types";
import { IStayRepository } from "../types";

/**
 * @public Enwraps the logics for persisting the {@link @stay#Stay} domain object and recreating the domain object from the datastore under the dev environment
 */
export class Repository implements IStayRepository {
  #client: { [key: string]: IStay };

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
  public initialize() {
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
    return this.#client[idInString];
  }

  /**
   * @public Retrieves all the Stay domain object by their title
   * @access public
   * @param title
   */
  public async findByTitle(title: Title) {
    const result = Object.values(this.#client).find((stay) =>
      stay.title.equals(title)
    );
    if (!result) {
      return null;
    }
    return result;
  }

  /**
   * @public Saves the provided domain object which enables persistence
   * @access public
   * @param stay
   */
  public async save(stay: IStay) {
    const identifierAsString = stay.id.toString();
    this.#client[identifierAsString] = { ...stay };
  }

  /**
   * @public Removes the domain object from the datastore. This stops the domain object from persisting.
   * @access public
   * @param stay
   */
  public async delete(stay: IStay) {
    throw new Error("Logic not implemented yet");
  }
}
