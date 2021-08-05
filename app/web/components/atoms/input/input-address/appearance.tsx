export const useAddressInputAppearance = ({
  direction,
}: {
  direction: "top" | "bottom" | "default";
}) => {
  const renderShape = (direction: string) => {
    switch (direction) {
      case "top":
        return "border-b border-l border-r border-gray-400 rounded-br-lg";
      case "bottom":
        return "border-t border-l border-r rounded-t-lg";
      default:
        return "border border-gray-400 rounded-lg";
    }
  };

  return { dynamicStyle: renderShape(direction) };
};
