import { useHandleScroll } from '@hooks/useHandleScroll';
import { useState } from 'react';
import { handleRedirectToHomePage } from '@utils/redirect';

export const useBanner = () => {
  const scrollPosition = useHandleScroll();
  const [category, setCategory] = useState('stay');

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  return {
    scrollPosition,
    category,
    handleCategoryChange,
    handleRedirectToHomePage,
  };
};
