export const renderShape = (direction: string) => {
  switch (direction) {
    case "top":
      return {
        borderBottom: "1px solid",
        borderLeft: "1px solid",
        borderRight: "1px solid",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderColor: "white__3",
      };
    case "bottom":
      return {
        borderTop: "1px solid",
        borderLeft: "1px solid",
        borderRight: "1px solid",
        borderTopRadius: 8,
        borderColor: "white__3",
      };
    default:
      return {
        border: "1px solid",
        borderColor: "white__3",
        borderRadius: 8,
      };
  }
};
