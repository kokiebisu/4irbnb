export class Command {
  #id: string;
  #email: string;
  public constructor(id: string, email: string) {
    this.#id = id;
    this.#email = email;
  }

  get id() {
    return this.#id;
  }

  get email() {
    return this.#email;
  }
}
