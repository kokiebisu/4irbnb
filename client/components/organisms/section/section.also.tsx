import { Button } from '../../../components/atoms/button/button.component';
import React, { useLayoutEffect, useRef, useState } from 'react';
import layout from '../../../styles/layout.module.scss';
import font from '../../../styles/font.module.scss';
import { AlsoSectionProps } from './props';
import space from '../../../styles/space.module.scss';
import { groupByTwo } from '../../../helper/array';
import { Card } from '../../../components/atoms/card/card.component';
import { nearbyPic } from '../../../content';
import section from './section.module.scss';

export const AlsoSection: React.FC<AlsoSectionProps> = ({
  items = [
    'city1',
    'city2',
    'city3',
    'city4',
    'city5',
    'city6',
    'city7',
    'city8',
  ],
  title = 'People also search for',
  columns = 2,
}) => {
  const [width, setWidth] = useState(500);
  const containerRef = useRef<HTMLDivElement>();
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  });

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

  const previous = () => {
    if (state.activeSlide === 0) {
      return setState({
        ...state,
        translate: (items.length / 2 - 1) * (width / columns),
        activeSlide: items.length / 2 - 1,
      });
    }

    setState({
      ...state,
      activeSlide: state.activeSlide - 1,
      translate: (state.activeSlide - 1) * (width / columns),
    });
  };

  const next = () => {
    if (state.activeSlide === items.length / 2 - columns) {
      return setState({
        ...state,
        translate: 0,
        activeSlide: 0,
      });
    }
    setState({
      ...state,
      activeSlide: state.activeSlide + 1,
      translate: (state.activeSlide + 1) * (width / columns),
    });
  };

  const displayingItems = groupByTwo(items);
  return (
    <div style={{ overflowX: 'hidden' }}>
      <div
        ref={containerRef}
        className={[
          layout['flex'],
          layout['items-center'],
          layout['justify-between'],
        ].join(' ')}>
        <div className={[space['m-v--16']].join(' ')}>
          <h3 className={[font['size--20']].join(' ')}>{title}</h3>
        </div>
        <div className={[layout['flex'], layout['items-center']].join(' ')}>
          <div className={[space['m-h--4']].join(' ')}>
            <Button
              type='paginate'
              direction='left'
              onPress={previous}
              disable={state.activeSlide === 0}
            />
          </div>
          <div className={[space['m-h--4']].join(' ')}>
            <Button
              type='paginate'
              direction='right'
              onPress={next}
              disable={state.activeSlide === items.length / 2 - columns}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          height: '100%',
          width: width * (items.length / 2),
          transform: `translateX(-${state.translate}px)`,
          transition: `transform ease-out ${state.transition}s`,
        }}>
        <div style={{ display: 'flex' }}>
          {displayingItems.map((item, index) => {
            return (
              <div
                style={{ width: width / columns }}
                key={index}
                className={[section['w__nearby']].join(' ')}>
                <div className={[space['m-b--10']].join(' ')}>
                  <Card
                    type='nearby'
                    to={item[0] && item[0].to}
                    imgUrl={nearbyPic[index]}
                    city={item[0].city}
                    hours={item[0].hours}
                    size='lg'
                  />
                </div>
                <div>
                  <Card
                    type='nearby'
                    to={item[1] && item[1].to}
                    imgUrl={nearbyPic[index + 4]}
                    city={item[1].city}
                    hours={item[1].hours}
                    size='lg'
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
