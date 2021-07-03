import { Experience, IExperience } from '.';

/**
 * @public
 * Factory to create Experience
 * @param id -
 * @param title -
 * @param imgUrls -
 *
 * @returns an {@link @nextbnb/common#Experience} instance
 */
export const createExperience = (
  id: string,
  title: string,
  imgUrls: string[]
): IExperience => {
  return new Experience({ id, title, imgUrls });
};
