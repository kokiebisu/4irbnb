import { User } from "./class";

/**
 * @public
 * Factory to create the User instance
 *
 * @param id -
 * @param username -
 * @param name -
 * @param iconUrl -
 *
 * @returns a new {@link @nextbnb/user#User} instance
 */
export const createUser = (
  id: string,
  emailAddress: string,
  firstName: string,
  lastName: string
): User => new User({ id, emailAddress, firstName, lastName });
