import { useStayDispatch, useStayState } from '@context/stay';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const usePhoneSegment = () => {
  const router = useRouter();
  const stayDispatch = useStayDispatch();
  const { phone } = useStayState();
  const [data, setData] = useState({
    phone,
  });

  const handleRedirectToNextPage = () => {
    stayDispatch({
      type: 'add',
      payload: data,
    });
    setTimeout(() => {
      router.push('/become-a-host/requirements');
    }, 500);
  };

  const handleRedirectToPreviousPage = () => {
    setTimeout(() => {
      router.push('/become-a-host/description');
    }, 500);
  };

  const handleChange = (e: any, property: string) => {
    setData({ ...data, [property]: e.target.value });
  };

  const canProceedToNextPage = data.phone === 0;

  return {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    handleChange,
    canProceedToNextPage,
  };
};
