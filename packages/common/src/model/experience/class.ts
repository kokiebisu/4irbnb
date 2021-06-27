import { IExperience } from './type';

/**
 * @private
 * Class to create the Experience instance
 *
 * @remark
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
