import { Host } from './class';

/**
 * @public
 * Factory to create Hosts
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} createdAt
 * @returns {Obj}
 */
export const createHost = (
  firstName: string,
  lastName: string,
  createdAt: Date
): Host => {
  return new Host({ firstName, lastName, createdAt });
};
