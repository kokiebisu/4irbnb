/**
 * @public
 */
export class Command {
  #firstName: string;
  #lastName: string;
  #email: string;
  public constructor(firstName: string, lastName: string, email: string) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#email = email;
  }

  public get firstName() {
    return this.#firstName;
  }

  public get lastName() {
    return this.#lastName;
  }

  public get email() {
    return this.#email;
  }
}
