import { useState } from 'react';

export const useStartingCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleIsHoveredChange = (isHoveredState) =>
    setIsHovered(!isHoveredState);

  return { isHovered, handleIsHoveredChange };
};
