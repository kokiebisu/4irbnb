export const renderShape = (direction: "top" | "bottom" | null) => {
  switch (direction) {
    case "top":
      return "rounded-b-md border-bottom border-left border-right";
    case "bottom":
      return "border-top border-left border-right rounded-t-md";
    default:
      return "border rounded-md";
  }
};
