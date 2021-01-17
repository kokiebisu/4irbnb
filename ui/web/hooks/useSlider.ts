import { useState } from "react";

export interface SliderProps {
  state: {
    activeSlide: number;
    translate: number;
    transition: number;
  };
  nextSlide: () => void;
  previousSlide: () => void;
}

export const useSlider = (items, width, type) => {
  const displayingLength = {
    banner: items.length,
    also: items.length / 2,
  };

  const displayingWidth = {
    banner: width,
    also: width / (width > 728 ? 3 : 2),
  };
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  });

  const previous = () => {
    if (state.activeSlide === 0) {
      return setState({
        ...state,
        translate: (displayingLength[type] - 1) * displayingWidth[type],
        activeSlide: displayingLength[type] - 1,
      });
    }

    setState({
      ...state,
      activeSlide: state.activeSlide - 1,
      translate: (state.activeSlide - 1) * displayingWidth[type],
    });
  };

  const next = () => {
    if (state.activeSlide === displayingLength[type] - 1) {
      return setState({
        ...state,
        translate: 0,
        activeSlide: 0,
      });
    }
    setState({
      ...state,
      activeSlide: state.activeSlide + 1,
      translate: (state.activeSlide + 1) * displayingWidth[type],
    });
  };

  return { state, previous, next };
};
