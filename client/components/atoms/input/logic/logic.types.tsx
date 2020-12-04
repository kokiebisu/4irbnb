/** Components */
import { Options as GuestOptions } from "./logic.guest";
import {
  Options as PlaceOptions,
  Properties as PlaceProperties,
} from "./logic.place";
import {
  Options as ApartmentOptions,
  Properties as ApartmentProperties,
} from "./logic.apartment";
import {
  Options as BedAndBreakfastOptions,
  Properties as BedAndBreakfastProperties,
} from "./logic.bedbreakfast";
import {
  Options as HouseOptions,
  Properties as HouseProperties,
} from "./logic.house";
import {
  Options as SecondaryOptions,
  Properties as SecondaryProperties,
} from "./logic.secondary";
import {
  Options as UniqueSpaceOptions,
  Properties as UniqueSpaceProperties,
} from "./logic.unique";
import {
  Options as BoutiqueHotelOptions,
  Properties as BoutiqueHotelProperties,
} from "./logic.boutique";
import { Options as BedroomsOptions } from "./logic.bedrooms";
import { Options as CountryOptions } from "./logic.country";

export const properties = {
  place: PlaceProperties,
  Apartment: ApartmentProperties,
  "Bed and breakfast": BedAndBreakfastProperties,
  House: HouseProperties,
  "Secondary unit": SecondaryProperties,
  "Unique space": UniqueSpaceProperties,
  "Boutique hotel": BoutiqueHotelProperties,
};

export const inputTypes = {
  guest: GuestOptions,
  place: { default: "Select one", options: PlaceOptions },
  Apartment: { default: "Select property type", options: ApartmentOptions },
  "Bed and breakfast": {
    default: "Select Property",
    options: BedAndBreakfastOptions,
  },
  "Secondary unit": {
    default: "Select property type",
    options: SecondaryOptions,
  },
  "Unique space": {
    default: "Select property type",
    options: UniqueSpaceOptions,
  },
  House: { default: "Select property type", options: HouseOptions },
  "Boutique hotel": {
    default: "Select property type",
    options: BoutiqueHotelOptions,
  },
  bedrooms: { options: BedroomsOptions },
  country: { options: CountryOptions },
};
