export const renderShape = ({
  direction,
}: {
  direction?: "top" | "bottom";
}) => {
  switch (direction) {
    case "top":
      return "rounded-b-md border-bottom border-left border-right";
    case "bottom":
      return "border-top border-left border-right rounded-t-md";
    default:
      return "border rounded-md";
  }
};
