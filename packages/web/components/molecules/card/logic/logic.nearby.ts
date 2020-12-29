export const renderSize = (card, size) => {
  switch (size) {
    case "sm":
      return [card["w__nearby--sm"]].join(" ");
    case "lg":
      return [card["w__nearby--lg"]].join(" ");
    default:
      return;
  }
};
