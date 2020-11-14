import { useLayoutEffect, useState } from 'react';

export const useHandleContainerWidthResize = (ref) => {
  const [width, setWidth] = useState(0);

  const handleRef = () => {
    if (ref.current && ref.current.getBoundingClientRect()) {
      setWidth(ref.current.getBoundingClientRect().width);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', handleRef);
    handleRef();
    return () => {
      window.removeEventListener('resize', handleRef);
    };
  });

  return width;
};
