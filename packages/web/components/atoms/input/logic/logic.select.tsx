export const renderShape = ({
  direction,
}: {
  direction?: "top" | "bottom";
}) => {
  switch (direction) {
    case "top":
      return "border-bottom border-left border-right border-gray-700 rounded-b-md";
    case "bottom":
      return "border-top border-left border-right border-gray-700 rounded-t-md";
    default:
      return "border-gray-700 rounded-md";
  }
};
