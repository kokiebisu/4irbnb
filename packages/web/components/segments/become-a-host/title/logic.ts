import { useStayDispatch, useStayState } from '@context/stay';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as mockData from './mock';

export const useTitleSegment = () => {
  const router = useRouter();
  const stayDispatch = useStayDispatch();
  const { title } = useStayState();
  const [data, setData] = useState({
    title,
  });

  const handleRedirectToNextPage = () => {
    stayDispatch({
      type: 'add',
      payload: data,
    });
    setTimeout(() => {
      router.push('/become-a-host/phone');
    }, 500);
  };

  const handleRedirectToPreviousPage = () => {
    setTimeout(() => {
      router.push('/become-a-host/description');
    }, 500);
  };

  const handleChange = (e, property) => {
    setData({ ...data, [property]: e.target.value });
  };

  return {
    ...mockData,
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    handleChange,
  };
};
