import { Stay } from './class';

/**
 * Factory to create the Stay instance
 * @param id
 * @param title
 * @param imgUrls
 * @returns
 */
export const createStay = (
  id: string,
  title: string,
  imgUrls: string[]
): Stay => {
  return new Stay({ id, title, imgUrls });
};
