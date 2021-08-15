import {
  AverageRatings,
  City,
  Country,
  ImgUrl,
  NumberOfReviews,
  Province,
  Title,
  HostingType,
  Guests,
  Bedrooms,
  Baths,
  Beds,
} from "./fields";

/**
 * A stay posted by the user
 * @public
 */
export interface IStay {
  title: Title;
  numberOfReviews: NumberOfReviews;
  averageRatings: AverageRatings;
  city: City;
  province: Province;
  country: Country;
  hostingType: HostingType;
  guests: Guests;
  bedrooms: Bedrooms;
  beds: Beds;
  baths: Baths;
  imgUrls: ImgUrl[];
}
