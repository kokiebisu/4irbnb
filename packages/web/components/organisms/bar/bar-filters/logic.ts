import { useState } from 'react';
import * as content from './content';

export const useFiltersBar = () => {
  const [width, setWidth] = useState(500);
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  });

  const handlePreviewSlide = () => {
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

  return {
    ...content,
    width,
    state,
    handleWidthChange,
    handlePreviewSlide,
    handleNextSlide,
  };
};
