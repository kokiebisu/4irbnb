import { useStayDispatch, useStayState } from '@context/stay';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const usePriceSegment = () => {
  const router = useRouter();
  const stayDispatch = useStayDispatch();
  const { basePrice, currency } = useStayState();
  const [data, setData] = useState({
    basePrice,
    currency,
  });

  const handleRedirectToNextPage = () => {
    stayDispatch({
      type: 'add',
      payload: data,
    });
    setTimeout(() => {
      router.push('/become-a-host/booking-scenarios');
    }, 500);
  };

  const handleRedirectToPreviousPage = () => {
    setTimeout(() => {
      router.push('/period');
    }, 500);
  };

  const handleChange = (e, property) => {
    const onlyNumbers = /^[0-9\b]+$/;
    if (e.target.value == '' || onlyNumbers.test(e.target.value)) {
      setData({ ...data, [property]: e.target.value });
    }
  };

  return {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    handleChange,
    basePrice,
  };
};
