export const useTextInputAppearance = ({
  direction,
}: {
  direction: "top" | "bottom";
}) => {
  const renderShape = (direction: string) => {
    switch (direction) {
      case "top":
        return "border-bottom border-left border-right rounded-b-md";
      case "bottom":
        return "border-top border-left border-right border-gray-700 rounded-t-md";
      default:
        return "rounded-md";
    }
  };

  return { dynamicStyle: renderShape(direction) };
};
