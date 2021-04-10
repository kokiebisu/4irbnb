import { useStayDispatch, useStayState } from '@context/stay';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const usePeriodSegment = () => {
  const router = useRouter();
  const stayDispatch = useStayDispatch();
  const { min, max } = useStayState();
  const [data, setData] = useState({
    min,
    max,
  });

  const handleRedirectToNextPage = () => {
    stayDispatch({
      type: 'add',
      payload: data,
    });
    setTimeout(() => {
      router.push('/become-a-host/price');
    }, 500);
  };

  const handleRedirectToPreviousPage = () => {
    setTimeout(() => {
      router.push('/advance');
    }, 500);
  };

  const canProceedToNextPage = () => data.min === 0 || data.max === 0;

  const handleCounterSubtract = (property) =>
    setData({ ...data, [property]: data[property] - 1 });
  const handleCounterAdd = (property) =>
    setData({ ...data, [property]: data[property] + 1 });

  return {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    canProceedToNextPage,
    handleCounterSubtract,
    handleCounterAdd,
  };
};
