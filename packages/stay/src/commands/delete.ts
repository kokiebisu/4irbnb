import { UniqueIdentifier } from "@4irbnb/common";

/**
 * @publc Command for deleting the stay data
 */
export class Command {
  #id: UniqueIdentifier;
  public constructor(id: string) {
    this.#id = new UniqueIdentifier(id);
  }

  public get id() {
    return this.#id;
  }
}
