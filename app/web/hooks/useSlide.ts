import { useLayoutEffect, useRef, useState } from "react";

export const useSlide = (moveBy: "whole") => {
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.7,
  });
  /**
   * Number 500 has nothing to do with container itself. Rather it is just initial value
   * being placed temporarily.
   */
  const [width, setWidth] = useState(500);
  const moveByType = {
    whole: width,
  };
  const containerRef = useRef<HTMLDivElement>(null);

  const handleRef = () => {
    if (containerRef.current && containerRef.current.getBoundingClientRect()) {
      setWidth(containerRef.current.getBoundingClientRect().width);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", handleRef);
    handleRef();
    return () => {
      window.removeEventListener("resize", handleRef);
    };
  });

  const previous = () => {
    setState({
      ...state,
      activeSlide: state.activeSlide - 1,
      translate: (state.activeSlide - 1) * moveByType[moveBy],
    });
  };

  const next = () => {
    setState({
      ...state,
      activeSlide: state.activeSlide + 1,
      translate: (state.activeSlide + 1) * moveByType[moveBy],
    });
  };

  return { state, containerRef, width, previous, next };
};
