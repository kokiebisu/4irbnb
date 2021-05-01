import { useLayoutEffect, useRef, useState } from 'react';
import styles from '@template/index.module.scss';
import sectionStyles from '@template/index.module.scss';
import section from '@template/index.module.scss';

import { Card, $Card } from '@card';
import { Button } from '@button';
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
      <div className="relative py-3">
        <ul
          className="hide-scrollbar -mx-2 flex p-0 overflox-x-auto overflow-y-hidden list-none min-w-full h-full"
          style={{
            scrollSnapType: 'x mandatory',
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
      <div className="overflow-x-hidden">
        <div ref={containerRef} className="flex items-center justify-between">
          <div className="my-4">
            <h3 className="text-lg">{title}</h3>
          </div>
          <div className="flex items-center">
            <div className="mx-1">
              <Button
                variant="paginate"
                direction="left"
                onClick={previous}
                disable={state.activeSlide === 0}
              />
            </div>
            <div className="mx-1">
              <Button
                variant="paginate"
                direction="right"
                onClick={next}
                disable={state.activeSlide === Math.floor(items.length / 2) - 1}
              />
            </div>
          </div>
        </div>
        <div
          className="h-full"
          style={{
            width: width * (items.length / 2),
            transform: `translateX(-${state.translate}px)`,
            transition: `transform ease-out ${state.transition}s`,
          }}
        >
          <div className="flex">
            {items.map((item, index) => {
              return (
                <div
                  style={{ width: width / (width > 1128 ? 3 : 2) }}
                  key={index}
                  className={[section['w__nearby']].join(' ')}
                >
                  <div className="mb-3 mr-4">
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
          <div className="flex items-center justify-between">
            <div>
              <div>
                <h2 className="font-medium text-gray-800 text-lg">{title}</h2>
              </div>
              {isDescription && (
                <div>
                  <p className="font-thin">{description}</p>
                </div>
              )}
            </div>
            <div>
              {pagination && (
                <div className="flex items-center">
                  <div className="mr-2">
                    <p className="font-light text-sm">1 / {items.length}</p>
                  </div>
                  <div className="mr-2">
                    <Button variant="paginate" direction="left" />
                  </div>
                  <div>
                    <Button variant="paginate" direction="right" />
                  </div>
                </div>
              )}
            </div>
          </div>
          {displayItems(carouselType, save)}
        </div>
        <div className="relative">
          {showAll && (
            <div className="my-6">
              <Button
                variant="expand"
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
        return 'hidden md:block';
      } else if (index > 3) {
        // should disappear below 728px
        return 'hidden sm:block';
      }
      // doesn't disappear
      return [].join(' ');
    };
    return (
      <div className="py-4">
        <div className={`grid ${[styles['multiplerows']].join(' ')}`}>
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
