import { ValueObject } from "@4irbnb/common";

/**
 * @public Represents the FullName model
 */
export interface IFullName {
  firstName: string;
  lastName: string;
}

/**
 * @public Enwraps the logics for the FullName value object
 */
export class FullName extends ValueObject<IFullName> {
  private constructor(props: IFullName) {
    super(props);
  }
  public static create(firstName: string, lastName: string) {
    return new FullName({
      firstName,
      lastName,
    });
  }
}

/**
 * @public Enwraps the logics for the EmailAddress value object
 */
export class Email extends ValueObject<string> {
  private constructor(props: string) {
    super(props);
  }
  public static create(emailAddress: string) {
    return new Email(emailAddress);
  }
}
