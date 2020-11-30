export const Properties = [
  "Apartment",
  "House",
  "Secondary unit",
  "Unique space",
  "Bed and breakfast",
  "Boutique hotel",
];

export const Options = Properties.map((option, index) => {
  return <option value={option}>{option}</option>;
});
