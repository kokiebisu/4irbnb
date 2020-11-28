const Properties = [
  {
    name: "Barn",
    description:
      "Converted living spaces that may have been originally used for storing grain, livestock, or farming equipment",
  },
  {
    name: "Boat",
    description:
      "Range from sailboats to luxury yachts that are moored while guests are visiting. If you have a houseboat or floating home, choose “houseboat.”",
  },
  {
    name: "Bus",
    description: "Converted vehicles with creatively reimagined interiors",
  },
  {
    name: "Camper/RV",
    description:
      "Big or small motor homes that may be half-home and half-vehicle, or camping trailers with compact spaces",
  },
  {
    name: "Campsite",
    description:
      "An area of land where hosts can choose which type of accommodation guests may set up such as a tent, yurt, camper/RV, or tiny house",
  },
  {
    name: "Castle",
    description:
      "Majestic and often historical buildings with architectural features like towers, spires, and moats",
  },
  {
    name: "Cave",
    description:
      "Natural formations like underground caverns and dwellings carved into hillsides or nuzzled into a cliff",
  },
  {
    name: "Dome house",
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
    name: "Igloo",
    description:
      "Dome-shaped structures made of snow and ice typically found in cold climates where they’re less likely to melt",
  },
  {
    name: "Island",
    description:
      "A piece of land completely surrounded by water, great for private getaways in paradise",
  },
  {
    name: "Lighthouse",
    description:
      "A tower with a bright light originally built to help ships navigate waterways. They're usually found on the coast near large bodies of water.",
  },
  {
    name: "Pension (Sourth Korea)",
    description:
      "A tower with a bright light originally built to help ships navigate waterways. They're usually found on the coast near large bodies of water.",
  },
  {
    name: "Plane",
    description:
      "Aircraft that were built for flight and have now been converted into living spaces",
  },
  {
    name: "Shepherd's hut",
    description:
      "Tiny wagons on wheels originally used by shepherds on the move with their sheep",
  },
  {
    name: "Tent",
    description:
      "Structures made of fabric and poles that are usually portable and collapsible. Some tents, like bedouin tents, are more permanent.",
  },
  {
    name: "Tiny house",
    description:
      "Stand-alone houses with compact interior living spaces, usually less than 400 square feet or 37 square metres",
  },
  {
    name: "Tipi",
    description:
      "Cone-shaped tents supported by poles. They usually have a flap door and may have an opening at the top.",
  },
  {
    name: "Train",
    description:
      "Cabooses, boxcars, and other railroad cars that have been converted into living spaces",
  },
  {
    name: "Treehouse",
    description:
      "Treehouses are built into the trunks or branches of trees. Nature-loving guests may climb a ladder or stairs to enjoy beautiful views.",
  },
  {
    name: "Windmill",
    description:
      "Unique structures originally designed with blades to catch the wind that now double as a living space—some may still be fully functioning",
  },
  {
    name: "Yurt",
    description:
      "Rounded tents usually made from a collapsible wooden framework",
  },
];

const Options = Properties.map((option, index) => {
  return <option value={option.name}>{option.name}</option>;
});

export { Properties, Options };
