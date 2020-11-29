/** Components */
import { Options as GuestOptions } from "./option.guest";
import {
  Options as PlaceOptions,
  Properties as PlaceProperties,
} from "./option.place";
import {
  Options as ApartmentOptions,
  Properties as ApartmentProperties,
} from "./option.apartment";
import {
  Options as BedAndBreakfastOptions,
  Properties as BedAndBreakfastProperties,
} from "./option.bedbreakfast";
import {
  Options as HouseOptions,
  Properties as HouseProperties,
} from "./option.house";
import {
  Options as SecondaryOptions,
  Properties as SecondaryProperties,
} from "./option.secondary";
import {
  Options as UniqueSpaceOptions,
  Properties as UniqueSpaceProperties,
} from "./option.unique";
import {
  Options as BoutiqueHotelOptions,
  Properties as BoutiqueHotelProperties,
} from "./option.boutique";

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
};
