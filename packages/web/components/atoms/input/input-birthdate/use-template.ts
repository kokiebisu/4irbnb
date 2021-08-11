export const useBirthDateInputTemplate = ({
  direction,
}: {
  direction?: "top" | "bottom" | "left" | "center" | "right" | "default";
}) => {
  const renderShape = ({ direction }: { direction: string }) => {
    switch (direction) {
      case "left":
        return "border-right border-gray-700";
      case "center":
        return "border border-gray-700";
      case "right":
        return "border-left border-gray-700";
      default:
        return "border border-gray-700 rounded-md";
    }
  };

  return { dynamicStyle: direction && renderShape({ direction }) };
};
