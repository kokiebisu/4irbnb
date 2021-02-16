export const birthdate = {
  year: "Year",
  month: "Month",
  day: "Day",
};

export const renderShape = (direction: string) => {
  switch (direction) {
    case "left":
      return { borderRight: "1px solid", borderColor: "grey.400" };
    case "center":
      return {};
    case "right":
      return { borderLeft: "1px solid", borderColor: "grey.400" };
    default:
      return { border: "1px solid", borderColor: "grey.400", borderRadius: 10 };
  }
};
