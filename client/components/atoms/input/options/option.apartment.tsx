export const ApartmentProperties = [
  {
    name: "Apartment",
    description:
      "Apartments and condominiums are typically located in a multi-unit residential building or complex where other people live.",
  },
  {
    name: "Condominium",
    description:
      "Typically located in multi-unit residential buildings or complexes where other people live. Condos are often owned by individuals whereas apartments are rented.",
  },
  {
    name: "Casa particular (Cuba)",
    description:
      "Accommodation found in Cuba that may be more like a private apartment or a room in a bed and breakfast",
  },
  {
    name: "Loft",
    description:
      "A space with an open layout—usually an apartment or condo. Walls that separate interior rooms in a loft may not extend fully to the ceiling.",
  },
  {
    name: "Serviced Apartment",
    description:
      "Apartments that offer hotel-like amenities, such as daily cleaning and a front desk, furnished and serviced by professional management companies",
  },
];

export const ApartmentOptions = ApartmentProperties.map((option, index) => {
  return <option value={option.name}>{option.name}</option>;
});
