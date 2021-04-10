import { useStayDispatch, useStayState } from '@context/stay';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as mockData from './mock';

export const useLocationSegment = () => {
  const router = useRouter();
  const stayDispatch = useStayDispatch();
  const { country, street, apt, city, state, postal } = useStayState();
  const [data, setData] = useState({
    country,
    street,
    apt,
    city,
    state,
    postal,
  });

  const handleRedirectToNextPage = () => {
    stayDispatch({
      type: 'add',
      payload: data,
    });
    setTimeout(() => {
      router.push('/become-a-host/amenities');
    }, 500);
  };

  const handleRedirectToPreviousPage = () => {
    setTimeout(() => {
      router.push('/become-a-host/bathrooms');
    }, 500);
  };

  const canProceedToNextPage = () =>
    data.street === '' ||
    data.city === '' ||
    data.state === '' ||
    data.postal === '';

  return {
    ...mockData,
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    canProceedToNextPage,
  };
};
