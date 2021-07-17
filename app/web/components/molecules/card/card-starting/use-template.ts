import { useState } from "react";

export const useStartingCardTemplate = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleIsHoveredChange = (isHoveredState: boolean) =>
    setIsHovered(!isHoveredState);

  return { isHovered, handleIsHoveredChange };
};
