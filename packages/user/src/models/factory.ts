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
 * @returns a new {@link @4irbnb/user#User} instance
 */
export const createUser = (
  id: string,
  email: string,
  firstName: string,
  lastName: string
): User => new User({ id, email, firstName, lastName });
