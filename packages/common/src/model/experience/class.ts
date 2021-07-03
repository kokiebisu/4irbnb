import { IExperience } from './type';

/**
 * @public
 * Class to create the Experience instance
 *
 * @remarks
 * Do not instantiate using the class directory.
 * Used the factory function {@link @nextbnb/common#createExperience}
 */
export class Experience {
  id: string;
  title: string;
  imgUrls: string[];

  constructor({ id, title, imgUrls }: IExperience) {
    this.id = id;
    this.title = title;
    this.imgUrls = imgUrls;
  }
}
