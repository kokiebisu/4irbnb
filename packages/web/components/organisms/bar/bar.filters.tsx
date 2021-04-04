import { Button, $Button } from '@button';
import { useLayoutEffect, useRef, useState } from 'react';

export const FiltersBar: React.FC<{}> = () => {
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
  const primaryFilters = ['Filters', 'Dates', 'Group size'];
  const secondaryFilters = [
    'Great for groups',
    'Family friendly',
    'Animals',
    'Arts & writing',
    'Baking',
    'Cooking',
    'Dance',
    'Drinks',
    'Entertainment',
    'Fitness',
    'History & culture',
    'Magic',
    'Music',
    'Social impact',
    'Wellness',
    'Olympians & Paralympians',
    'Designed for accessibility',
  ];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  });

  const previous = () => {
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

  const next = () => {
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

  return (
    <div className="flex items-center">
      <div className="flex">
        {primaryFilters.map((filter, index) => {
          return (
            <div key={index} className="mr-2">
              <Button variant={$Button.FILTER} inverse label={filter} />
            </div>
          );
        })}
      </div>
      <div className="mr-2 h-8 w-0.5 bg-gray-200 relative" />
      <div ref={containerRef} className="overflow-x-hidden relative py-1">
        {state.activeSlide > 0 && (
          <div
            className="absolute h-full left-0 top-0 z-40 w-24 flex items-center"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgb(255, 255, 255) 56.77%, rgba(255, 255, 255, 0) 94.47%)',
            }}
          >
            <Button
              variant={$Button.PAGINATE}
              direction="left"
              size={3}
              onClick={previous}
              animate
            />
          </div>
        )}
        <div
          className="flex relative"
          style={{
            transform: `translateX(-${state.translate}px)`,
            transition: `transform ease-out ${state.transition}s`,
          }}
        >
          {state.activeSlide > 0 && (
            <div className="absolute left-0 z-40">
              <Button variant={$Button.PAGINATE} direction="left" size={3} />
            </div>
          )}
          {secondaryFilters.map((filter, index) => {
            return (
              <div key={index} className="mr-2">
                <Button
                  variant={$Button.FILTER}
                  label={filter}
                  onClick={previous}
                />
              </div>
            );
          })}
        </div>
        {state.activeSlide < 3 && (
          <div
            className="h-full absolute right-0 top-0 z-40 w-24 flex justify-end items-center"
            style={{
              backgroundImage:
                'linear-gradient(to left, rgb(255, 255, 255) 56.77%, rgba(255, 255, 255, 0) 94.47%)',
            }}
          >
            <Button
              variant={$Button.PAGINATE}
              direction="right"
              size={3}
              onClick={next}
              animate
            />
          </div>
        )}
      </div>
    </div>
  );
};
