import { IStay } from "..";
import { HostingType } from "../constants";
import { Country } from "../constants/country";
import { NumberOfReviews, Title } from "../domains/fields";

export const stay: IStay = {
  title: Title.create("Best Location! Modern studio by the sky train"),
  numberOfReviews: NumberOfReviews.create(42),
  averageRatings: 4.36,
  city: "Coquitlam",
  province: "British Columbia",
  country: Country.CA,
  imgUrls: [],
  hostingType: HostingType.RentalUnit,
  numberOfGuests: 1,
  numberOfBedrooms: 1,
  numberOfBeds: 0,
  numberOfBath: 1,
};
