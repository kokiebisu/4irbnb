export const renderShape = (direction: string) => {
  switch (direction) {
    case "top":
      return {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderBottom: "1px solid",
        borderLeft: "1px solid",
        borderRight: "1px solid",
        borderColor: "grey.400",
      };
    case "bottom":
      return {
        borderTop: "1px solid",
        borderLeft: "1px solid",
        borderRight: "1px solid",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderColor: "grey.400",
      };
    default:
      return {
        border: "1px solid",
        borderColor: "grey.400",
        borderRadius: 8,
      };
  }
};
