import { Fields } from "../domains/stay";

/**
 * @publc Command for creating and persisting the stay data
 */
export class Command {
  #title: Fields.Title;

  public constructor(title: string) {
    this.#title = Fields.Title.create(title);
  }

  public get title() {
    return this.#title;
  }
}
