const Properties: { name: string; description: string }[] = [
  {
    name: "Bed and breakfast",
    description:
      "Professional hospitality businesses that offer breakfast for guests. A host usually lives on the property.",
  },
  {
    name: "Casa particular (Cuba)",
    description:
      "Accommodation found in Cuba that may be more like a private apartment or a room in a bed and breakfast",
  },
  {
    name: "Farm stay",
    description:
      "Professionally managed accommodations in agricultural settings where guests may interact with animals or enjoy activities like hiking or crafts",
  },
  {
    name: "Minsu (Taiwan)",
    description:
      "Professionally managed accommodations in Taiwan that offer private rooms for guests",
  },
  {
    name: "Nature lodge",
    description:
      "Professional hospitality businesses located in natural settings like forests and mountains",
  },
  {
    name: "Ryokan (Japan)",
    description:
      "Ryokans are traditional Japanese inns that usually have a small number of professionally managed rooms and offer a cultural experience for guests.",
  },
];

const Options = Properties.map((option, index) => {
  return (
    <option key={index} value={option.name}>
      {option.name}
    </option>
  );
});

export { Properties, Options };
