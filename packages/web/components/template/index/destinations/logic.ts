import { useRouter } from 'next/router';
import { useState } from 'react';

export const useDestinations = () => {
  const router = useRouter();
  const [destinationType, setDestinationType] = useState('artsCulture');

  const categories = [
    { name: 'Desinations for arts & culture', value: 'artsCulture' },
    { name: 'Destinations for outdoor adventure', value: 'outdoor' },
    { name: 'Mountain cabins', value: 'cabins' },
    { name: 'Beach destinations', value: 'beach' },
    { name: 'Popular destinations', value: 'popular' },
  ];

  const items = { artsCulture: [{ city: 'City', location: 'Location' }] };

  const handleDestinationTypeChange = (value) => {
    setDestinationType(value);
  };

  const handleDestinationRedirect = (city) => {
    router.push(`/${city.toLowerCase().split(' ').join('-')}/stays`);
  };

  return {
    destinationType,
    handleDestinationTypeChange,
    handleDestinationRedirect,
    categories,
    items,
  };
};
