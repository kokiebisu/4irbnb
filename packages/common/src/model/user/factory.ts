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
  username: string,
  name: string,
  iconUrl: string
): User => {
  return new User({ id, username, name, iconUrl });
};
