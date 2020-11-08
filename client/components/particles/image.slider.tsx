import { Button } from '../../components/atoms/button/button.component';
import React, { useEffect, useLayoutEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Slide = ({ slide }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundImage: `url(${slide})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    />
  );
};

export const ImageSlider = ({ slides }) => {
  const [width, setWidth] = useState(undefined);
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  });

  const containerRef = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    console.log(containerRef.current.getBoundingClientRect());
    setWidth(containerRef.current.getBoundingClientRect().width);
  }, []);

  console.log('width', width * slides.length);

  const previousSlide = () => {
    if (state.activeSlide === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) & width,
        activeSlide: slides.length - 1,
      });
    }

    setState({
      ...state,
      activeSlide: state.activeSlide - 1,
      translate: (state.activeSlide - 1) * width,
    });
  };

  const nextSlide = () => {
    if (state.activeSlide === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeSlide: 0,
      });
    }
    setState({
      ...state,
      activeSlide: state.activeSlide + 1,
      translate: (state.activeSlide + 1) * width,
    });
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}>
      <div
        style={{
          transform: `translateX(-${state.translate}px)`,
          transition: `transform ease-out ${state.transition}s`,
          height: '100%',
          width: width * slides.length,
          display: 'flex',
        }}>
        {slides.map((slide) => {
          return <Slide slide={slide} />;
        })}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: 10,
        }}>
        <Button type='paginate' direction='left' onPress={previousSlide} />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: 10,
        }}>
        <Button type='paginate' direction='right' onPress={nextSlide} />
      </div>
    </div>
  );
};
