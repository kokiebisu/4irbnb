import { AverateRatings, ImgUrl, NumberOfReviews, Title } from "./fields";

/**
 * A stay posted by the user
 * @public
 */
export interface IStay {
  title: Title;
  numberOfReviews: NumberOfReviews;
  averateRatings: AverateRatings;
  imgUrls: ImgUrl[];
}
