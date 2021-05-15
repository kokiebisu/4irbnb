import { IStay } from './interface';

/**
 * Checks whether a given value is an {@link @nextbnb/type#IStay}
 * @param arg - Value to be evaluated
 * @public
 *
 * @remark
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
  return (
    typeof arg.id === 'string' &&
    typeof arg.title === 'string' &&
    typeof arg.imgUrls === 'string'
  );
}
