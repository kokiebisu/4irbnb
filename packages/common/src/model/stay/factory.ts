import { Stay } from './class';

/**
 * @public
 * Factory to create the Stay instance
 *
 * @param id -
 * @param title -
 * @param imgUrls -
 *
 * @returns a new {@link @nextbnb/model#Stay} instance
 */
export const createStay = (
  id: string,
  title: string,
  imgUrls: string[]
): Stay => {
  return new Stay({ id, title, imgUrls });
};
