import { useLayoutEffect, useRef, useState } from 'react';

export const useSlider = () => {
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.7,
  });

  const [width, setWidth] = useState(500);
  const containerRef = useRef<HTMLDivElement>();
  const handleRef = () => {
    if (containerRef.current && containerRef.current.getBoundingClientRect()) {
      setWidth(containerRef.current.getBoundingClientRect().width);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', handleRef);
    handleRef();
    return () => {
      window.removeEventListener('resize', handleRef);
    };
  });

  const handlePreviousSlide = () => {
    if (width > 1128) {
      return setState({
        ...state,
        activeSlide: state.activeSlide - 1,
        translate: (state.activeSlide - 1) * (width / 2),
      });
    }
    if (width > 728) {
      return setState({
        ...state,
        activeSlide: state.activeSlide - 1,
        translate: (state.activeSlide - 1) * 550,
      });
    }
    setState({
      ...state,
      activeSlide: state.activeSlide - 1,
      translate: (state.activeSlide - 1) * width,
    });
  };

  const handleNextSlide = () => {
    if (width > 1128) {
      return setState({
        ...state,
        activeSlide: state.activeSlide + 1,
        translate: (state.activeSlide + 1) * (width / 2),
      });
    }
    if (width > 728) {
      return setState({
        ...state,
        activeSlide: state.activeSlide + 1,
        translate: (state.activeSlide + 1) * 550,
      });
    }
    setState({
      ...state,
      activeSlide: state.activeSlide + 1,
      translate: (state.activeSlide + 1) * width,
    });
  };
  return { handleNextSlide, handlePreviousSlide, state, width, containerRef };
};
