/**
 * Birthdate Input
 */
export const styleInput = (errors: boolean, fieldActive: boolean) => {
  if (errors && fieldActive) {
    return "bg-white";
  }
  if (errors) {
    return "bg-gray-100";
  }
  return "bg-white placeholder-gray-200";
};

export const styleLabel = (errors: boolean, fieldActive: boolean) => {
  if (errors && fieldActive) {
    return "absolute transition text-sm top-2 text-red-600 font-medium";
  }
  if (errors) {
    return "absolute transition text-sm top-2 text-red-600 font-medium";
  }
  return "absolute transition text-xs top-2 text-gray-500";
};

export const styleContainer = ({
  errors,
  fieldActive,
  direction,
}: {
  errors?: boolean;
  fieldActive?: boolean;
  direction?: "top" | "bottom" | "left" | "right";
}) => {
  if (errors && fieldActive) {
    return "border-red-600 border-2";
  }
  if (errors) {
    if (direction === "left") {
      return `rounded-l-lg "border-red-600 border-2`;
    }
    if (direction === "right") {
      return `rounded-r-lg border-red-600 border-2`;
    }
    return `rounded-r-lg border-red-600 border-2`;
  }
  if (fieldActive) {
    return "border-2 border-black outline-none";
  }
  return "border border-black";
};
