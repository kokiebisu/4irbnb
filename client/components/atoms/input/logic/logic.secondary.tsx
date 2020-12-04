export const Properties: { name: string; description: string }[] = [
  {
    name: "Guesthouse",
    description:
      "A detached building, sometimes called a carriage house or coach house, that shares a property with another stand-alone structure like a house",
  },
  {
    name: "Guest suite",
    description:
      "Sometimes called an in-law, this separate space has a private entrance and is located inside or attached to a larger structure, like a house",
  },
  {
    name: "Farm stay",
    description:
      "Professionally managed accommodations in agricultural settings where guests may interact with animals or enjoy activities like hiking or crafts",
  },
];

export const Options = Properties.map(({ name }, index) => {
  return (
    <option key={index} value={name}>
      {name}
    </option>
  );
});
