import { UniqueIdentifier } from "@4irbnb/common";
import {
  // City,
  // Country,
  // ImgUrl,
  // Province,
  Title,
  // HostingType,
  // Guests,
  // Bedrooms,
  // Baths,
  // Beds,
} from "./fields";

/**
 * A stay posted by the user
 * @public
 */
export interface IStay {
  id: UniqueIdentifier;
  title: Title;
  // city: City;
  // province: Province;
  // country: Country;
  // hostingType: HostingType;
  // guests: Guests;
  // bedrooms: Bedrooms;
  // beds: Beds;
  // baths: Baths;
  // imgUrls: ImgUrl[];
  // reviews: Reviews;
  // averageRatings: AverageRatings;
  changeTitle(title: Title): void;
}
