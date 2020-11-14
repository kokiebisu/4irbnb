import { useState, useLayoutEffect, useEffect } from 'react';

export const useHandleResize = () => {
  const [pageHeight, setPageHeight] = useState(0);

  const handleResize = () => {
    const height = document.body.scrollHeight - document.body.clientHeight;
    setPageHeight(height);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return pageHeight;
};
