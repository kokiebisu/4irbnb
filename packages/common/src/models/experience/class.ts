import { IExperience } from './interface';

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
