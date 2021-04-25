import { useLayoutEffect, useRef, useState } from 'react';

export const useFiltersBarInteraction = ({ width, handleWidthChange }) => {
  const containerRef = useRef<HTMLDivElement>();
  const handleRef = () => {
    if (containerRef.current && containerRef.current.getBoundingClientRect()) {
      handleWidthChange(containerRef.current.getBoundingClientRect().width);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', handleRef);
    handleRef();
    return () => {
      window.removeEventListener('resize', handleRef);
    };
  });

  return { containerRef };
};
