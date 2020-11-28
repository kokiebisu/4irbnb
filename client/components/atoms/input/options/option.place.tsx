export const Places = [
  "Apartment",
  "House",
  "Secondary unit",
  "Unique space",
  "Bed and breakfast",
  "Boutique hotel",
];

export const PlaceOptions = Places.map((option, index) => {
  return <option value={option}>{option}</option>;
});
