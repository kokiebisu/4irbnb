export const Properties: { name: string; description: string }[] = [
  {
    name: "House",
    description:
      "Residential buildings that are usually stand-alone structures. Some, like duplexes, may share walls or outdoor areas with other houses.",
  },
  {
    name: "Bungalow",
    description:
      "Houses with architectural features like a wide front porch and a sloping roof, usually single-level homes",
  },
  {
    name: "Cabin",
    description:
      "Houses built with natural materials like wood, often located in settings like forests and mountains",
  },
  {
    name: "Casa particular (Cuba)",
    description:
      "Accommodation found in Cuba that may be more like a private apartment or a room in a bed and breakfast",
  },
  {
    name: "Chalet",
    description:
      "Houses that are usually made of wood and have a sloping roof. Many are in locations popular for skiing or summer getaways.",
  },
  {
    name: "Cottage",
    description:
      "Cozy homes often located in rural areas or near a lake or beach",
  },
  {
    name: "Cycladic house",
    description:
      "Traditional whitewashed houses with flat roofs found on mountainsides in the Cycladic islands in Greece",
  },
  {
    name: "Dammuso",
    description:
      "Stone houses with wide walls and domed roofs found on the island of Pantelleria in Italy",
  },
  {
    name: "Done house",
    description:
      "Houses with a hemispherical roof or completely spherical construction, such as geodesic domes and bubble homes",
  },
  {
    name: "Earth house",
    description:
      "Homes that are built into the earth or constructed from natural materials like rammed earth",
  },
  {
    name: "Farm stay",
    description:
      "Professionally managed accommodations in agricultural settings where guests may interact with animals or enjoy activities like hiking or crafts",
  },
  {
    name: "Houseboat",
    description:
      'Boats that are more like homes and often set up as a primary residence. Choose "houseboat" if you have a floating home.',
  },
  {
    name: "Hut",
    description:
      "Homes made from simple materials like wood or mud and often have thatched roofs made of straw",
  },
  {
    name: "Lighthouse",
    description:
      "A tower with a bright light originally built to help ships navigate waterways. They're usually found on the coast near large bodies of water.",
  },
  {
    name: "Pension (South Korea)",
    description:
      "A tower with a bright light originally built to help ships navigate waterways. They're usually found on the coast near large bodies of water.",
  },
  {
    name: "Shepherd's hut",
    description:
      "A tower with a bright light originally built to help ships navigate waterways. They're usually found on the coast near large bodies of water.",
  },
  {
    name: "Tiny house",
    description:
      "Stand-alone houses with compact interior living spaces, usually less than 400 square feet or 37 square metres",
  },
  {
    name: "Townhouse",
    description:
      "Private units, like row houses and terraced houses, that share walls and may share outdoor spaces with other units",
  },
  {
    name: "Trullo (Italy)",
    description:
      "A trullo is a round, stone house with a cone-shaped roof that originated in the Apulia region of Italy.",
  },
  {
    name: "Villa",
    description:
      "Luxurious homes that tend to have indoor-outdoor spaces and large yards, gardens, or pools",
  },
];

export const Options = Properties.map((option, index) => {
  return (
    <option key={index} value={option.name}>
      {option.name}
    </option>
  );
});
