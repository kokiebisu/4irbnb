/**
 * @publc Command for creating and persisting the stay data
 */
export class Command {
  #title: string;

  public constructor(title: string) {
    this.#title = title;
  }

  public get title() {
    return this.#title;
  }
}
