import { IStay } from "./type";

/**
 * Checks whether a given value is an {@link @4irbnb/common#IStay}
 * @param arg - Value to be evaluated
 * @public
 *
 * @remarks
 * Id may switch to a string later on
 *
 * @example
 * Here's an example of how to use this guard
 * ```ts
 * const stay = { id: '1', title: 'Cozy fireplace condo', imgUrl: ['www.imgUrl.com/1', ['www.imgUrl.com/2']] }
 * isStay(stay); // true
 * ```
 */
export function isStay(arg: any): arg is IStay {
  return typeof arg.id === "string" && typeof arg.title === "string";
}
