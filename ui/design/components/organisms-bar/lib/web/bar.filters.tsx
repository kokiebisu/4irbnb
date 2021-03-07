/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, $BUTTON } from '@nextbnb/atoms-button/dist/bundle.esm';
import { useLayoutEffect, useRef, useState } from 'react';

const FiltersBar: React.FC<{}> = () => {
  const [width, setWidth] = useState(500);
  const containerRef = useRef<HTMLDivElement>(null);
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
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <div css={{ display: 'flex' }}>
        {primaryFilters.map((filter, index) => {
          return (
            <div key={index} css={{ marginRight: 8, whiteSpace: 'nowrap' }}>
              <Button variant={$BUTTON.filter} inverse label={filter} />
            </div>
          );
        })}
      </div>
      <div
        sx={{ bg: 'lightgray' }}
        css={{
          marginRight: 8,
          height: 35,
          width: 2,
          position: 'relative',
        }}
      />
      <div
        ref={containerRef}
        css={{ overflowX: 'hidden', position: 'relative', padding: '2px 0' }}
      >
        {state.activeSlide > 0 && (
          <div
            css={{
              height: '100%',
              position: 'absolute',
              left: 0,
              top: 0,
              zIndex: 40,
              width: 65,
              display: 'flex',
              alignItems: 'center',
              backgroundImage:
                'linear-gradient(to right, rgb(255, 255, 255) 56.77%, rgba(255, 255, 255, 0) 94.47%)',
            }}
          >
            <Button
              variant={$BUTTON.paginate}
              direction="left"
              size={12}
              onClick={previous}
            />
          </div>
        )}
        <div
          css={{
            display: 'flex',
            position: 'relative',
            transform: `translateX(-${state.translate}px)`,
            transition: `transform ease-out ${state.transition}s`,
          }}
        >
          {state.activeSlide > 0 && (
            <div css={{ position: 'absolute', left: 0, zIndex: 40 }}>
              <Button variant={$BUTTON.paginate} direction="left" />
            </div>
          )}
          {secondaryFilters.map((filter, index) => {
            return (
              <div key={index} css={{ marginRight: 8 }}>
                <Button
                  variant={$BUTTON.filter}
                  label={filter}
                  onClick={previous}
                />
              </div>
            );
          })}
        </div>
        {state.activeSlide < 3 && (
          <div
            css={{
              height: '100%',
              position: 'absolute',
              right: 0,
              top: 0,
              zIndex: 40,
              width: 65,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              backgroundImage:
                'linear-gradient(to left, rgb(255, 255, 255) 56.77%, rgba(255, 255, 255, 0) 94.47%)',
            }}
          >
            <Button
              variant={$BUTTON.paginate}
              direction="right"
              size={12}
              onClick={next}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export const filters = (props) => {
  return {
    filters: {
      component: <FiltersBar {...props} />,
      css: {},
    },
  };
};
