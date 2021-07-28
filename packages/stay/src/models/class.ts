import { IStay } from "./type";

/**
 * @public
 * Blueprint of the Stay instance
 */
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
