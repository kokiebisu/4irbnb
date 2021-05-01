import { useLayoutEffect, useState, useRef } from 'react';
import { Button } from '@button';

const Dots = ({ slides, activeSlide }) => {
  return (
    <div className="absolute bottom-4 w-full flex items-center justify-center">
      {slides.map((_, index) => (
        <span
          key={index}
          className={`mr-2 p-1 cursor-pointer rounded-full ${
            activeSlide === index ? 'bg-white' : 'bg-gray-400'
          }`}
          style={{
            transition: 'all 0.2s ease-in',
          }}
        />
      ))}
    </div>
  );
};

const Slide = ({ slide }) => {
  return (
    <div
      className="h-full w-full bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: slide && `url(${slide})`,
        backgroundColor: !slide && 'lightgray',
      }}
    />
  );
};

export const ImageSlider = ({ slides = new Array(3) }) => {
  const [style, setStyle] = useState({
    opacity: 0,
  });
  const [width, setWidth] = useState(1000);
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  });

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

  const previousSlide = () => {
    if (state.activeSlide === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * width,
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
      onMouseEnter={() =>
        setStyle({
          opacity: 1,
        })
      }
      onMouseLeave={() =>
        setStyle({
          opacity: 0,
        })
      }
      className="relative w-full h-full overflow-hidden rounded-md z-50"
    >
      <div
        className="flex h-full rounded-md"
        style={{
          transform: `translateX(-${state.translate}px)`,
          transition: `transform ease-out ${state.transition}s`,
          width: width * slides.length,
        }}
      >
        {slides.map((slide, index) => {
          return <Slide key={index} slide={slide} />;
        })}
      </div>
      <div
        className="absolute left-3 z-50 top-1/2 -translate-y-1/2"
        style={{
          ...style,
          transition: 'opacity 0.2s ease-out',
        }}
      >
        <Button variant="paginate" direction="left" onClick={previousSlide} />
      </div>
      <div
        style={{
          ...style,
          transition: 'opacity 0.2s ease-out',
        }}
        className="absolute top-1/2 -translate-y-1/2 right-3 z-50"
      >
        <Button variant="paginate" direction="right" onClick={nextSlide} />
      </div>

      <div
        style={{ ...style, transition: 'opacity 0.2s ease-out' }}
        className={[particle['dots']].join(' ')}
      >
        <Dots slides={slides} activeSlide={state.activeSlide} />
      </div>
    </div>
  );
};
