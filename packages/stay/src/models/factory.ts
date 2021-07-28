import { Stay } from "./class";
import { IStay } from "./type";

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
export const createStay = ({ id, title, imgUrls }: IStay): Stay => {
  return new Stay({ id, title, imgUrls });
};
