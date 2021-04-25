import { useState } from 'react';

export const useReviewCard = () => {
  const [display, setDisplay] = useState(false);

  const renderDescription = (description: string) => {
    return `${description.split(' ').slice(0, 30).join(' ')}...`;
  };

  const handleDisplayChange = () => setDisplay(!display);

  return { renderDescription, display, handleDisplayChange };
};
