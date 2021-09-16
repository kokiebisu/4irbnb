export class Command {
  #email: string;
  public constructor(email: string) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }
}
