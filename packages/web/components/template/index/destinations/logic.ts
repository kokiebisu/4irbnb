import { useState } from 'react';
import { handleDestinationRedirect } from '@utils/redirect';
import { categories, items } from './mock';

export const useDestinations = () => {
  const [destinationType, setDestinationType] = useState('artsCulture');

  const handleDestinationTypeChange = (value) => {
    setDestinationType(value);
  };

  return {
    destinationType,
    handleDestinationTypeChange,
    handleDestinationRedirect,
    categories,
    items,
  };
};
