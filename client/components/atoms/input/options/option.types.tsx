/** Components */
import { Options as GuestOptions } from "./option.guest";
import { Options as PlaceOptions } from "./option.place";
import { Options as ApartmentOptions } from "./option.apartment";
import { Options as BedAndBreakfastOptions } from "./option.bedbreakfast";
import { Options as HouseOptions } from "./option.house";
import { Options as SecondaryOptions } from "./option.secondary";
import { Options as UniqueSpaceOptions } from "./option.unique";
import { Options as BoutiqueHotelOptions } from "./option.boutique";

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
