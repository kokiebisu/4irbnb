export const BedBreakfastProperties = [
  "Bed and breakfast",
  "Casa particular (Cuba)",
  "Farm stay",
  "Minsu (Taiwan)",
  "Nature lodge",
  "Ryokan (Japan)",
];

export const BedAndBreakfastOptions = BedBreakfastProperties.map(
  (option, index) => {
    return <option value={index}>{option}</option>;
  }
);
