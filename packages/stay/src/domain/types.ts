import { Image, Title } from "./fields";

/**
 * A stay posted by the user
 * @public
 */
export interface IStay {
  id: string;
  title: Title;
  imgUrls: Image[];
}
