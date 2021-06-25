import { IStay } from './interface';

export class Stay {
  id: string;
  title: string;
  imgUrls: string[];

  constructor({ id, title, imgUrls }: IStay) {
    this.id = id;
    this.title = title;
    this.imgUrls = imgUrls;
  }
}
