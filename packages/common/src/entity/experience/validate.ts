import { IExperience } from './type';

/**
 * Checks whether a given value is an {@link @nextbnb/type#IExperience}
 * @param arg - Value to be evaluated
 * @public
 *
 * @example
 * Here's an example of how to use this guard
 * ```ts
 * const experience = { id: '1', title: 'Cozy fireplace condo', imgUrl: ['www.imgUrl.com/1', ['www.imgUrl.com/2']] }
 * isExperience(experience); // true
 * ```
 */
export function isExperience(arg: any): arg is IExperience {
  return (
    typeof arg.id === 'string' &&
    typeof arg.title === 'string' &&
    typeof arg.imgUrls === 'string'
  );
}
