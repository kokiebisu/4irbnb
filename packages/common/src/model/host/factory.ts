import { Host } from './class';

/**
 * @public
 * Factory to create Hosts
 * @param firstName -
 * @param lastName -
 * @param createdAt -
 * @returns a new {@link @nextbnb/host#Host} instance
 */
export const createHost = (
  firstName: string,
  lastName: string,
  createdAt: Date
): Host => {
  return new Host({ firstName, lastName, createdAt });
};
