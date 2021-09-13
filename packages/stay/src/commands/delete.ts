import { UniqueIdentifier } from "@4irbnb/common";

export class DeleteCommand {
  #id: UniqueIdentifier;
  public constructor(id: string) {
    this.#id = new UniqueIdentifier(id);
  }

  public get id() {
    return this.#id;
  }
}
