import { Experience, IExperience } from ".";

/**
 * @public
 * Factory to create Experience
 * @param id -
 * @param title -
 * @param imgUrls -
 *
 * @returns an {@link @nextbnb/common#Experience} instance
 */
export const buildCreateExperience = (imgUrlValidator: RegExp) => {
  return function createExperience({ id, title, imgUrls }: IExperience) {
    if (!id) {
      throw new Error("ID cannot be an empty string");
    }
    if (!title) {
      throw new Error("Title cannot be an empty string");
    }
    if (imgUrls.every((imgUrl) => imgUrl.match(imgUrlValidator))) {
      throw new Error("Not all imgUrls are valid");
    }
    return new Experience({ id, title, imgUrls });
  };
};
