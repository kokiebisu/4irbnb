import { IExperience } from "./type";

/**
 * @public
 * Class to create the Experience instance
 *
 * @remarks
 * Do not instantiate using the class directory.
 * Used the factory function {@link @nextbnb/common#createExperience}
 */
export class Experience {
  #id: string;
  #title: string;
  #imgUrls: string[];

  constructor({ id, title, imgUrls }: IExperience) {
    this.#id = id;
    this.#title = title;
    this.#imgUrls = imgUrls;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get imgUrls() {
    return this.#imgUrls;
  }

  set id(newId) {
    this.#id = newId;
  }

  set title(newTitle) {
    this.#title = newTitle;
  }

  set imgUrls(newImgUrls) {
    this.#imgUrls = newImgUrls;
  }
}
