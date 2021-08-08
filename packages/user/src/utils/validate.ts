import { IUser } from "../models/type";

/**
 * @public
 * Checks whether a given value is an {@link @4irbnb/common#IUser}
 * @param arg - Value to be evaluated
 *
 * @example
 * Here's an example of how to use this guard
 * ```ts
 * const user = { id: '1', emailAddress: 'john', firstName: 'John Parker', lastName: 'www.iconUrl.com' }
 * isUser(user); // true
 * ```
 */
export const isUser = (arg: any): arg is IUser =>
  typeof arg.id === "string" && typeof arg.email === "string";
