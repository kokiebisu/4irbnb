import { useState } from 'react';

export const useVideoCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleIsHoveredChange = (isHoveredState) =>
    setIsHovered(isHoveredState);

  return { isHovered, handleIsHoveredChange };
};
