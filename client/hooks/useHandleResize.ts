import { useState, useEffect } from 'react';

/**
 * A custom hook to calculate the height of the page
 */
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
