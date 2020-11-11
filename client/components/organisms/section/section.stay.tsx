import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import shape from '../../../styles/shape.module.scss';
import font from '../../../styles/font.module.scss';
import color from '../../../styles/color.module.scss';
import styles from './section.module.scss';
import { Card } from '../../atoms/card/card.component';
import { Button } from '../../../components/atoms/button/button.component';
import sectionStyles from './section.module.scss';
import { ChevronLeft, ChevronRight } from '../../../public/svg/regular';
import { StaySectionProps } from './props';
import section from './section.module.scss';

export const StaySection: React.FC<StaySectionProps> = ({
  title = 'Section Title',
  description = 'Section Description',
  pagination = false,
  showAll = { description: 'Show all cards', to: '/' },
  carouselType = '',
  save = false,
  isDescription = false,
  fetchUrl = '',
  items = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ],
}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(items);
  }, []);

  const TypeStayCarousel = ({ data }) => {
    return (
      <div className={[layout['relative'], space['p-v--10']].join(' ')}>
        <ul
          className={[layout['hide-scrollbar']].join(' ')}
          style={{
            marginLeft: -5,
            marginRight: -5,
            display: 'flex',
            listStyle: 'none',
            padding: 0,
            overflowX: 'auto',
            overflowY: 'hidden',
            minWidth: '100%',
            scrollSnapType: 'x mandatory',
            height: '100%',
          }}>
          {data.length &&
            data.map((item, index) => {
              return (
                <li
                  key={index}
                  className={[
                    sectionStyles['w__card'],
                    sectionStyles['flex__card'],
                  ].join(' ')}
                  style={{
                    scrollSnapAlign: 'start',
                    borderLeftStyle: 'solid',
                    borderLeftColor: 'transparent',
                  }}>
                  <Card
                    type='typestay'
                    card={item && item.card}
                    to={item && item.to}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    );
  };

  const WithPagination = ({ save, items }) => {
    const [width, setWidth] = useState(500);
    const containerRef = useRef<HTMLDivElement>();
    const [state, setState] = useState({
      activeSlide: 0,
      translate: 0,
      transition: 0.45,
    });

    const handleRef = () => {
      if (
        containerRef.current &&
        containerRef.current.getBoundingClientRect()
      ) {
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
      setState({
        ...state,
        activeSlide: state.activeSlide - 1,
        translate: (state.activeSlide - 1) * width,
      });
    };

    const next = () => {
      setState({
        ...state,
        activeSlide: state.activeSlide + 1,
        translate: (state.activeSlide + 1) * width,
      });
    };

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
                disable={state.activeSlide === Math.floor(items.length / 2) - 1}
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
            {items.map((item, index) => {
              return (
                <div
                  style={{ width: width / (width > 1128 ? 3 : 2) }}
                  key={index}
                  className={[section['w__nearby']].join(' ')}>
                  <div
                    className={[space['m-b--10'], space['m-r--16']].join(' ')}>
                    <Card
                      type='horizontal'
                      card={item && item.card}
                      to={item && item.to}
                      save={save}
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

  const WithoutPagination = () => {
    return (
      <div>
        <div>
          <div
            className={[layout['items-center'], layout['justify-between']].join(
              ' '
            )}>
            <div>
              <div>
                <h2
                  className={[
                    font['weight--500'],
                    color['c--gray__4'],
                    font['size--22'],
                  ].join(' ')}>
                  {title}
                </h2>
              </div>
              {isDescription && (
                <div>
                  <p className={[font['weight--100']].join(' ')}>
                    {description}
                  </p>
                </div>
              )}
            </div>
            <div>
              {pagination && (
                <div className={[layout['items-center']].join(' ')}>
                  <div className={[space['m-r--6']].join(' ')}>
                    <p
                      className={[font['weight--300'], font['size--14']].join(
                        ' '
                      )}>
                      1 / {items.length}
                    </p>
                  </div>
                  <div className={[space['m-r--6']].join(' ')}>
                    <Button type='paginate' direction='left' />
                  </div>
                  <div>
                    <Button type='paginate' direction='right' />
                  </div>
                </div>
              )}
            </div>
          </div>
          {displayItems(carouselType, save)}
        </div>
        <div className={[layout['relative']].join(' ')}>
          {showAll && (
            <div className={space['m-v--25']}>
              <Button
                type='expand'
                to={showAll.to}
                title={showAll.description}
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  const MultipleRows = ({ data, save }) => {
    const displayingData = data.slice(0, 8);
    const evaluateNumber = (index) => {
      if (index > 5) {
        // should disappear below 1128px
        return [sectionStyles['none__cards--lg']].join(' ');
      } else if (index > 3) {
        // should disappear below 728px
        return [sectionStyles['none__cards--sm']].join(' ');
      }
      // doesn't disappear
      return [].join(' ');
    };
    return (
      <div style={{ paddingTop: 15, paddingBottom: 15 }}>
        <div
          style={{ display: 'grid' }}
          className={[styles['multiplerows']].join(' ')}>
          {displayingData.length &&
            displayingData.map((item, index) => {
              return (
                <div key={index} className={evaluateNumber(index)}>
                  <Card
                    type='horizontal'
                    card={item && item.card}
                    to={item && item.to}
                    save={save}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  const displayItems = (carouselType, save) => {
    switch (carouselType) {
      case 'stayTypes':
        return <TypeStayCarousel data={data} />;
      default:
        return <MultipleRows data={data} save={save} />;
    }
  };

  return pagination ? (
    <WithPagination items={data} save />
  ) : (
    <WithoutPagination />
  );
};
