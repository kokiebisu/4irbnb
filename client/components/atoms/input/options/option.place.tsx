const Properties = [
  "Apartment",
  "House",
  "Secondary unit",
  "Unique space",
  "Bed and breakfast",
  "Boutique hotel",
];

const Options = Properties.map((option, index) => {
  return <option value={option}>{option}</option>;
});

export { Properties, Options };
