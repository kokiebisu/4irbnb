/**
 * @publc Command for updating the stay data based on the given id
 */
export class Command {
  #id: string;
  #title: string;

  constructor(id: string, title: string) {
    this.#id = id;
    this.#title = title;
  }

  public get id() {
    return this.#id;
  }

  public get title() {
    return this.#title;
  }
}
