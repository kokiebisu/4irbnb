import { useLayoutEffect, useRef, useState } from 'react';

import layout from '@styles/layout.module.scss';
import space from '@styles/space.module.scss';
import font from '@styles/font.module.scss';
import section from '@template/index.module.scss';

import { Card, $Card } from '@card';
import { Button, $Button } from '@button';

export interface AvailableTemplateProps {
  availableSlots?: {
    date: string;
    from: string;
    to: string;
    standard: string;
    price: number;
  }[];
}

/**
 * Renders the available section
 * @param {Object[]} availables - List of available dates for the experience
 */
export const AvailableTemplate: React.FC<AvailableTemplateProps> = ({
  availableSlots,
}) => {
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  });
  const [width, setWidth] = useState(500);

  const evaluateColumns = () => {
    if (width > 1128) {
      return 5;
    } else if (width > 1028) {
      return 4;
    } else if (width > 728) {
      return 3;
    } else {
      return 2;
    }
  };

  const displayingColumns = evaluateColumns();

  const handleRef = () => {
    if (containerRef.current && containerRef.current.getBoundingClientRect()) {
      setWidth(containerRef.current.getBoundingClientRect().width);
    }
  };

  const handlePreviousSlide = () => {
    setState({
      ...state,
      activeSlide: state.activeSlide - 1,
      translate: (state.activeSlide - 1) * width,
    });
  };

  const handleNextSlide = () => {
    setState({
      ...state,
      activeSlide: state.activeSlide + 1,
      translate: (state.activeSlide + 1) * width,
    });
  };

  const containerRef = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    window.addEventListener('resize', handleRef);
    handleRef();
    return () => {
      window.removeEventListener('resize', handleRef);
    };
  });

  return (
    <div style={{ overflowX: 'hidden' }}>
      <div
        ref={containerRef}
        className={[
          layout['flex'],
          layout['items-center'],
          layout['justify-between'],
        ].join(' ')}
      >
        <div className={[space['m-v--16']].join(' ')}>
          <h3 className={[font['size--20']].join(' ')}>
            Choose from available dates
          </h3>
        </div>
        <div className={[layout['flex'], layout['items-center']].join(' ')}>
          <div className={[space['m-h--4']].join(' ')}>
            <Button
              variant={$Button.PAGINATE}
              animate
              direction="left"
              onClick={handlePreviousSlide}
              disable={state.activeSlide === 0}
            />
          </div>
          <div className={[space['m-h--4']].join(' ')}>
            <Button
              variant={$Button.PAGINATE}
              animate
              direction="right"
              onClick={handleNextSlide}
              disable={
                state.activeSlide ===
                Math.ceil(availableSlots.length / displayingColumns) - 1
              }
            />
          </div>
        </div>
      </div>
      <div
        style={{
          height: '100%',
          width: width * (availableSlots.length / displayingColumns),
          transform: `translateX(-${state.translate}px)`,
          transition: `transform ease-out ${state.transition}s`,
        }}
      >
        <div style={{ display: 'flex' }}>
          {availableSlots.map((available, index) => {
            return (
              <div
                style={{ width: width / displayingColumns }}
                key={index}
                className={[section['w__nearby']].join(' ')}
              >
                <div className={[space['m-b--10'], space['m-r--16']].join(' ')}>
                  <Card
                    variant={$Card.AVAILABLE}
                    date={available.date}
                    from={available.from}
                    to={available.to}
                    standard={available.standard}
                    price={available.price}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={[space['m-t--32']].join(' ')}>
        <Button variant={$Button.BORDER} title="See more dates" />
      </div>
    </div>
  );
};
