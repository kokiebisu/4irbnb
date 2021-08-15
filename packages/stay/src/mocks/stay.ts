import { IStay } from "..";

import {
  AverageRatings,
  City,
  Country,
  HostingType,
  Guests,
  NumberOfReviews,
  Province,
  Title,
  Bedrooms,
  Beds,
  Baths,
  ImgUrl,
} from "../domains";

export const stayA: IStay = {
  title: Title.create("Best Location! Modern studio by the sky train"),
  numberOfReviews: NumberOfReviews.create(42),
  averageRatings: AverageRatings.create(4.36),
  city: City.create("Coquitlam"),
  province: Province.create("British Columbia"),
  country: Country.create(Country.Type.CA),
  imgUrls: [ImgUrl.create("https://image1")],
  hostingType: HostingType.create(HostingType.Type.RentalUnit),
  guests: Guests.create(1),
  bedrooms: Bedrooms.create(1),
  beds: Beds.create(0),
  baths: Baths.create(1),
};

export const stayB: IStay = {
  title: Title.create("Cozy Private Suite on Ground Floor"),
  numberOfReviews: NumberOfReviews.create(2),
  averageRatings: AverageRatings.create(3.5),
  city: City.create("Burnaby"),
  province: Province.create("British Columbia"),
  country: Country.create(Country.Type.CA),
  imgUrls: [ImgUrl.create("https://image2")],
  hostingType: HostingType.create(HostingType.Type.GuestSuite),
  guests: Guests.create(1),
  bedrooms: Bedrooms.create(1),
  beds: Beds.create(0),
  baths: Baths.create(1),
};

export const stay = [stayA, stayB];
