import { Title } from "../domains/fields";

export class UpdateCommand {
  #id: string;
  #title: Title;

  private constructor(id: string, title: Title) {
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
