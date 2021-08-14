import { ImgUrl, Title } from "./fields";

/**
 * A stay posted by the user
 * @public
 */
export interface IStay {
  title: Title;
  imgUrls: ImgUrl[];
}
