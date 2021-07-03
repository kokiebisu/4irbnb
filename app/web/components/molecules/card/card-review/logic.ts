import { useState } from 'react';
import * as utils from './utils';

export const useReviewCard = () => {
  const [display, setDisplay] = useState(false);

  const handleDisplayChange = () => setDisplay(!display);

  return { ...utils, display, handleDisplayChange };
};
