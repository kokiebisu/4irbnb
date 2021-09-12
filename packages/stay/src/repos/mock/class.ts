import { UniqueIdentifier } from "@4irbnb/common";
import { Title } from "../../domains/fields";
import { IStay } from "../../domains/types";
import { IRepository } from "../types";

/**
 * @public Enwraps the logics for persisting the {@link @stay#Stay} domain object and recreating the domain object from the datastore under the dev environment
 */
export class Repository implements IRepository {
  #client: { [key: string]: IStay };
  private constructor() {
    this.#client = {};
  }
  public initialize() {
    return new Repository();
  }

  /**
   * @public Retrieves the Stay domain object by their id
   * @access public
   * @param id
   */
  public findById(id: UniqueIdentifier) {
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
  public findByTitle(title: Title) {
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
  public save(stay: IStay) {
    const identifierAsString = stay.id.toString();
    this.#client[identifierAsString] = { ...stay };
  }

  /**
   * @public Removes the domain object from the datastore. This stops the domain object from persisting.
   * @access public
   * @param stay
   */
  public delete(stay: IStay) {
    throw new Error("Logic not implemented yet");
  }
}
