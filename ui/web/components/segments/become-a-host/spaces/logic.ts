import { useStayDispatch, useStayState } from '@context/stay';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as mockData from './mock';

export const useSpacesSegment = () => {
  const router = useRouter();
  const stayDispatch = useStayDispatch();
  const { spaces } = useStayState();
  const [data, setData] = useState({
    spaces,
  });

  const handleRedirectToNextPage = () => {
    stayDispatch({
      type: 'add',
      payload: data,
    });
    setTimeout(() => {
      router.push('/become-a-host/photos');
    }, 500);
  };

  const handleRedirectToPreviousPage = () => {
    setTimeout(() => {
      router.push('/become-a-host/amenities');
    }, 500);
  };

  const handleChange = (type: string, params: string) => {
    if (data[type].includes(params)) {
      setData({
        ...data,
        [type]: [...data[type]].filter((element) => element !== params),
      });
    } else {
      setData({
        ...data,
        [type]: [...data[type], params],
      });
    }
  };

  return {
    ...mockData,
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    handleChange,
  };
};
