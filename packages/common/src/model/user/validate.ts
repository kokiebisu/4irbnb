import { IUser } from './type';

/**
 * Checks whether a given value is an {@link @nextbnb/type#IUser}
 * @param arg - Value to be evaluated
 * @public
 *
 * @example
 * Here's an example of how to use this guard
 * ```ts
 * const user = { id: '1', username: 'john', name: 'John Parker', iconUrl: 'www.iconUrl.com' }
 * isUser(user); // true
 * ```
 */
export function isUser(arg: any): arg is IUser {
  return (
    typeof arg.id === 'string' &&
    typeof arg.username === 'string' &&
    typeof arg.name === 'string' &&
    typeof arg.iconUrl === 'string'
  );
}
