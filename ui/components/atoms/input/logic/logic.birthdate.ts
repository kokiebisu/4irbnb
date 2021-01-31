export const birthdate = {
  year: "Year",
  month: "Month",
  day: "Day",
};

export const renderShape = (direction: string) => {
  switch (direction) {
    case "left":
      return { borderRight: "1px solid", borderColor: "white__3" };
    case "center":
      return {};
    case "right":
      return { borderLeft: "1px solid", borderColor: "white__3" };
    default:
      return { border: "1px solid", borderColor: "white__3", borderRadius: 10 };
  }
};
