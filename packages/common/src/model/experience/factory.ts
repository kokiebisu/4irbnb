import { Experience, IExperience } from '.';

/**
 * Factory to create Experience
 * @param {string} id
 * @param {string} title
 * @param {string[]} imgUrls
 */
export const createExperience = (
  id: string,
  title: string,
  imgUrls: string[]
): IExperience => {
  return new Experience({ id, title, imgUrls });
};
