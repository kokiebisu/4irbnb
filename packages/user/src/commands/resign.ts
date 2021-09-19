export class Command {
  #id: string;

  public constructor(id: string) {
    this.#id = id;
  }

  public get id() {
    return this.#id;
  }
}
