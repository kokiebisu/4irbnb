import { useRouter } from 'next/router';
import { useState } from 'react';

import { categories, items } from './mock';

export const useDestinationsSegment = () => {
  const router = useRouter();
  const [destinationType, setDestinationType] = useState<
    'artsCulture' | 'outdoor' | 'cabins' | 'beach' | 'popular'
  >('artsCulture');

  const handleDestinationTypeChange = (value) => {
    setDestinationType(value);
  };

  const handleDestinationRedirect = (city) =>
    router.push(`/${city.toLowerCase().split(' ').join('-')}/stays`);

  return {
    destinationType,
    handleDestinationTypeChange,
    handleDestinationRedirect,
    categories,
    items,
  };
};
