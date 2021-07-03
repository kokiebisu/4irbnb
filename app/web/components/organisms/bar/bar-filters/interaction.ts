import { useLayoutEffect, useRef, useState } from 'react';

export const useFiltersBarInteraction = () => {
  const [width, setWidth] = useState(500);
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  });

  const handlePreviousSlide = () => {
    // if (state.activeSlide === 0) {
    //   return setState({
    //     ...state,
    //     translate: (displayingLength[type] - 1) * displayingWidth[type],
    //     activeSlide: displayingLength[type] - 1,
    //   });
    // }

    setState({
      ...state,
      activeSlide: state.activeSlide - 1,
      translate: (state.activeSlide - 1) * 300,
    });
  };

  const handleNextSlide = () => {
    // if (state.activeSlide === displayingLength[type] - 1) {
    //   return setState({
    //     ...state,
    //     translate: 0,
    //     activeSlide: 0,
    //   });
    // }
    setState({
      ...state,
      activeSlide: state.activeSlide + 1,
      translate: (state.activeSlide + 1) * 300,
    });
  };

  const handleWidthChange = (widthState: number) => setWidth(widthState);

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

  return {
    containerRef,
    state,
    handlePreviousSlide,
    handleNextSlide,
  };
};
