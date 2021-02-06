export const renderSize = (size) => {
  switch (size) {
    case "sm":
      return { scrollSnapAlign: "start", width: ["75px", "75px", "55px"] };
    case "lg":
      return { scrollSnapAlign: "start", width: ["85px", "85px", "50px"] };
    default:
      return;
  }
};
