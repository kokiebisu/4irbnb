import { Identifier } from "@4irbnb/common";
import { Entity } from "../domains";
import { IEntityProps } from "../domains/types";
import { IRepository } from "../repos/types";

/**
 * @public Creates the User domain object. During the process, it attaches the appropriate identifier
 */
export class Factory {
  #repo: IRepository;

  public constructor(repo: IRepository) {
    this.#repo = repo;
  }

  /**
   * Finds the next primary identifer and attaches it to the Entity to be created so that the primary identifier aligns with the one with the database
   * @param props
   * @returns
   */
  public async create(props: IEntityProps) {
    const id = await this.#repo.findNextIdentifier();
    const nextIdentifier = new Identifier(id);
    return new Entity(nextIdentifier, props);
  }
}
