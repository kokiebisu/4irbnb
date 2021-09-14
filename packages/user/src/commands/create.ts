import { Fields } from "../domains/user";

export class Create {
  #fullName: Fields.FullName;
  #email: Fields.Email;
  public constructor(
    fullName: { firstName: string; lastName: string },
    email: string
  ) {
    this.#fullName = Fields.FullName.create(
      fullName.firstName,
      fullName.lastName
    );
    this.#email = Fields.Email.create(email);
  }

  public get fulName() {
    return this.#fullName;
  }

  public get email() {
    return this.#email;
  }
}
