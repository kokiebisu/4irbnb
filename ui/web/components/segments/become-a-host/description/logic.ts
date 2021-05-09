import { useStayDispatch, useStayState } from '@context/stay';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as mockData from './mock';

export const useDescriptionSegment = () => {
  const router = useRouter();
  const stayDispatch = useStayDispatch();
  const { description } = useStayState();
  const [data, setData] = useState({
    description,
  });

  const handleRedirectToNextPage = () => {
    stayDispatch({
      type: 'add',
      payload: data,
    });
    setTimeout(() => {
      router.push('/become-a-host/title');
    }, 500);
  };

  const handleRedirectToPreviousPage = () => {
    setTimeout(() => {
      router.push('/become-a-host/spaces');
    }, 500);
  };

  const handleTextareaChange = (e, property) => {
    setData({ ...data, [property]: e.target.value });
  };

  return {
    ...mockData,
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    description,
    handleTextareaChange,
  };
};
