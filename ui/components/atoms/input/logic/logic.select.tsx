export const renderShape = (direction: string) => {
  switch (direction) {
    case "top":
      return {
        borderColor: "white__3",
        borderBottom: "1px solid",
        borderLeft: "1px solid",
        borderRight: "1px solid",
        borderBottomRadius: 6,
      };
    case "bottom":
      return {
        borderTop: "1px solid",
        borderLeft: "1px solid",
        borderRight: "1px solid",
        borderColor: "white__3",
        borderTopRadius: 6,
      };
    default:
      return { border: "1px solid", borderColor: "white__3", borderRadius: 8 };
  }
};
