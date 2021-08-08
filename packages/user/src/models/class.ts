import { IUser } from "./type";

/**
 * @public
 * Blueprint of the User instance
 */
export class User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;

  constructor({ id, emailAddress, firstName, lastName }: IUser) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
