/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Card, $CARD } from '@nextbnb/molecules';
import { Button, $BUTTON } from '@nextbnb/atoms';

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
export const MultipleTemplate: React.FC<{
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
}> = ({
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
    undefined,
  ],
}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(items);
  }, []);

  const TypeStayCarousel = ({ data }) => {
    return (
      <div
        css={{
          position: 'relative',
          padding: '10px 0',
        }}
      >
        <ul
          // className={[layout["hide-scrollbar"]].join(" ")}
          css={{
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
                  // className={[
                  //   sectionStyles["w__card"],
                  //   sectionStyles["flex__card"],
                  // ].join(" ")}
                  css={{
                    scrollSnapAlign: 'start',
                    borderLeftStyle: 'solid',
                    borderLeftColor: 'transparent',
                  }}
                >
                  <Card
                    variant={$CARD.typestay}
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
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            css={{
              margin: '16px 0',
            }}
          >
            <h3
              css={{
                fontSize: 20,
              }}
            >
              {title}
            </h3>
          </div>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              css={{
                margin: '0 4px',
              }}
            >
              <Button
                variant={$BUTTON.paginate}
                animate
                direction="left"
                onClick={previous}
                disable={state.activeSlide === 0}
              />
            </div>
            <div
              css={{
                margin: '0 4px',
              }}
            >
              <Button
                variant={$BUTTON.paginate}
                animate
                direction="right"
                onClick={next}
                disable={state.activeSlide === Math.floor(items.length / 2) - 1}
              />
            </div>
          </div>
        </div>
        <div
          css={{
            height: '100%',
            width: width * (items.length / 2),
            transform: `translateX(-${state.translate}px)`,
            transition: `transform ease-out ${state.transition}s`,
          }}
        >
          <div css={{ display: 'flex' }}>
            {items.map((item, index) => {
              return (
                <div
                  css={{ width: width / (width > 1128 ? 3 : 2) }}
                  key={index}
                  // className={[section["w__nearby"]].join(" ")}
                >
                  <div
                    css={{
                      marginBottom: 10,
                      marginRight: 16,
                    }}
                  >
                    <Card
                      variant={$CARD.horizontal}
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
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div>
                <h2
                  css={{
                    fontWeight: 500,
                    color: 'grey.900',
                    fontSize: 22,
                  }}
                >
                  {title}
                </h2>
              </div>
              {isDescription && (
                <div>
                  <p
                    css={{
                      fontWeight: 100,
                    }}
                  >
                    {description}
                  </p>
                </div>
              )}
            </div>
            <div>
              {pagination && (
                <div
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <div
                    css={{
                      marginRight: 6,
                    }}
                  >
                    <p
                      css={{
                        fontWeight: 300,
                        fontSize: 14,
                      }}
                    >
                      1 / {items.length}
                    </p>
                  </div>
                  <div
                    css={{
                      marginRight: 6,
                    }}
                  >
                    <Button
                      variant={$BUTTON.paginate}
                      animate
                      direction="left"
                    />
                  </div>
                  <div>
                    <Button
                      variant={$BUTTON.paginate}
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
        <div
          css={{
            position: 'relative',
          }}
        >
          {showAll && (
            <div
              css={{
                margin: '25px 0',
              }}
            >
              <Button
                variant={$BUTTON.expand}
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
        // return [sectionStyles["none__cards--lg"]].join(" ");
      } else if (index > 3) {
        // should disappear below 728px
        // return [sectionStyles["none__cards--sm"]].join(" ");
      }
      // doesn't disappear
      return [].join(' ');
    };
    return (
      <div style={{ paddingTop: 15, paddingBottom: 15 }}>
        <div
          style={{ display: 'grid' }}
          // className={[styles["multiplerows"]].join(" ")}
        >
          {displayingData.length &&
            displayingData.map((item, index) => {
              return (
                <div key={index} className={evaluateNumber(index)}>
                  <Card
                    variant={$CARD.horizontal}
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
