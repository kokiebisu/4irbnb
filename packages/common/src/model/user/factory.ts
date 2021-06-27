import { User } from './class';

/**
 * Factory to create the User instance
 * @param {string} id
 * @param {string} username
 * @param {string} name
 * @param {string} iconUrl
 * @returns {Obj}
 */
export const createUser = (
  id: string,
  username: string,
  name: string,
  iconUrl: string
): User => {
  return new User({ id, username, name, iconUrl });
};
