import { IUser } from "./type";

/**
 * @public
 * Blueprint of the User instance
 */
export class User {
  id: string;
  emailAddress: string;
  firstName: string;
  lastName: string;

  constructor({ id, emailAddress, firstName, lastName }: IUser) {
    this.id = id;
    this.emailAddress = emailAddress;
    this.firstName = firstName;
    this.lastName = lastName
}
