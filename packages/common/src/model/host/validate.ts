import { IHost } from './type';

/**
 * Checks whether a given value is an {@link @nextbnb/type#IHost}
 * @param arg - Value to be evaluated
 * @public
 *
 * @example
 * Here's an example of how to use this guard
 * ```ts
 * const host = { id: '1', username: 'john', name: '}
 * isHost(host) // true
 * ```
 */
export const isHost = (arg: any): arg is IHost => {
  return (
    typeof arg.firstName === 'string' &&
    typeof arg.lastName === 'string' &&
    typeof arg.createdAt === 'object'
  );
};
