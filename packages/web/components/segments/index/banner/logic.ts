import { useHandleScroll } from '@hooks/useHandleScroll';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const useBanner = () => {
  const router = useRouter();
  const scrollPosition = useHandleScroll();

  const [category, setCategory] = useState('stay');

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const handleRedirectToHomePage = () => router.push('/');

  return {
    scrollPosition,
    category,
    handleCategoryChange,
    handleRedirectToHomePage,
  };
};
