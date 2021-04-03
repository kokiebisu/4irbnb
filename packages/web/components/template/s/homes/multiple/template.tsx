import { useLayoutEffect, useRef, useState } from 'react';

import layout from '@styles/layout.module.scss';
import space from '@styles/space.module.scss';
import font from '@styles/font.module.scss';
import color from '@styles/color.module.scss';
import styles from '@template/index.module.scss';
import sectionStyles from '@template/index.module.scss';
import section from '@template/index.module.scss';

import { Card, $Card } from '@card';
import { Button, $Button } from '@button';
import { useRouter } from 'next/router';

export interface MultipleTemplateProps {
  title?: string;
  description?: string;
  pagination?: boolean;
  showAll?: any;
  type?: string;
  carouselType?: string;
  save?: boolean;
  items?: { card: any; to: string }[];
  isDescription?: boolean;
  fetchUrl?: string;
}

/**
 * Renders the stay section
 * @param {string} title - Title of the section
 * @param {string} description - Subtitle of the section
 * @param {boolean} pagination - Whether if the section includes the pagination
 * @param {Object} showAll - The link to expand the section
 * @param {string} carouselType - The type of carousel
 * @param {boolean} save - Whether if the section can be saved
 * @param {boolean} isDescription - Whether if the section includes a subtitle
 * @param {Object[]} items - Displaying items
 */
export const MultipleTemplate: React.FC<MultipleTemplateProps> = ({
  title,
  description,
  pagination,
  showAll,
  carouselType,
  save,
  isDescription,
  fetchUrl,
  items,
}) => {
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
          }}
        >
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
                  }}
                >
                  <Card
                    variant={$Card.TYPESTAY}
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
          ].join(' ')}
        >
          <div className={[space['m-v--16']].join(' ')}>
            <h3 className={[font['size--20']].join(' ')}>{title}</h3>
          </div>
          <div className={[layout['flex'], layout['items-center']].join(' ')}>
            <div className={[space['m-h--4']].join(' ')}>
              <Button
                variant={$Button.PAGINATE}
                animate
                direction="left"
                onClick={previous}
                disable={state.activeSlide === 0}
              />
            </div>
            <div className={[space['m-h--4']].join(' ')}>
              <Button
                variant={$Button.PAGINATE}
                animate
                direction="right"
                onClick={next}
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
          }}
        >
          <div style={{ display: 'flex' }}>
            {items.map((item, index) => {
              return (
                <div
                  style={{ width: width / (width > 1128 ? 3 : 2) }}
                  key={index}
                  className={[section['w__nearby']].join(' ')}
                >
                  <div
                    className={[space['m-b--10'], space['m-r--16']].join(' ')}
                  >
                    <Card
                      variant={$Card.HORIZONTAL}
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
    const router = useRouter();
    return (
      <div>
        <div>
          <div
            className={[layout['items-center'], layout['justify-between']].join(
              ' '
            )}
          >
            <div>
              <div>
                <h2
                  className={[
                    font['weight--500'],
                    color['c--gray__4'],
                    font['size--22'],
                  ].join(' ')}
                >
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
                      )}
                    >
                      1 / {items.length}
                    </p>
                  </div>
                  <div className={[space['m-r--6']].join(' ')}>
                    <Button
                      variant={$Button.PAGINATE}
                      animate
                      direction="left"
                    />
                  </div>
                  <div>
                    <Button
                      variant={$Button.PAGINATE}
                      animate
                      direction="right"
                    />
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
                variant={$Button.EXPAND}
                onClick={() => router.push(showAll.to)}
                title={showAll.description}
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  const MultipleRows = ({ data, save }) => {
    const router = useRouter();
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
          className={[styles['multiplerows']].join(' ')}
        >
          {displayingData.length &&
            displayingData.map((item, index) => {
              return (
                <div key={index} className={evaluateNumber(index)}>
                  <Card
                    variant={$Card.HORIZONTAL}
                    card={item && item.card}
                    onClick={() => router.push(item.to)}
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
        return <TypeStayCarousel data={items} />;
      default:
        return <MultipleRows data={items} save={save} />;
    }
  };

  return pagination ? (
    <WithPagination items={items} save />
  ) : (
    <WithoutPagination />
  );
};
