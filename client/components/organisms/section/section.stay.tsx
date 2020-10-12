import React from 'react';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import shape from '../../../styles/shape.module.scss';
import font from '../../../styles/font.module.scss';
import color from '../../../styles/color.module.scss';
import styles from './section.module.scss';
import { Card, CardObjectProps } from '../../atoms/card/card.component';
import { Button } from '../../../components/atoms/button/button.component';
import sectionStyles from './section.module.scss';
import { ChevronLeft, ChevronRight } from '../../../public/svg/regular';

interface Props {
  title?: string;
  description?: string;
  pagination?: boolean;
  showAll?: any;
  type?: string;
  carouselType?: string;
  save?: boolean;
  items: { card: any; to: string }[];
  isDescription?: boolean;
}

export const StaySection: React.FC<Props> = ({
  title = 'Section Title',
  description = 'Section Description',
  pagination = false,
  showAll = { description: 'Show all cards', to: '/' },
  carouselType = '',
  save = false,
  isDescription = false,
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
  const displayItems = (carouselType, save) => {
    if (pagination) {
      return <PaginationCarousel save={save} items={items} />;
    }
    switch (carouselType) {
      case 'stayTypes':
        return <TypeStayCarousel items={items} />;
      default:
        return <MultipleRows items={items} save={save} />;
    }
  };
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
                <p className={[font['weight--100']].join(' ')}>{description}</p>
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
                  <Button
                    extendsTo={[
                      color['b--white__2'],
                      color['bg--transparent'],
                      space['p--8'],
                      shape['br--circle'],
                    ].join(' ')}
                    onPress={() => console.log('pressed left')}>
                    <ChevronLeft width={10} stroke='black' strokeWidth={5} />
                  </Button>
                </div>
                <div>
                  <Button
                    extendsTo={[
                      color['b--white__2'],
                      color['bg--transparent'],
                      space['p--8'],
                      shape['br--circle'],
                    ].join(' ')}
                    onPress={() => console.log('pressed right')}>
                    <ChevronRight width={10} stroke='black' strokeWidth={5} />
                  </Button>
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
              extendsTo={[font['weight--500']].join(' ')}
              onPress={() => console.log('clicked')}
              to={showAll.to}>
              <div className={[layout['items-center']].join(' ')}>
                <div>
                  <u>{showAll.description}</u>
                </div>
                <div>
                  <ChevronRight width={14} stroke='black' strokeWidth={5} />
                </div>
              </div>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const TypeStayCarousel = ({ items }) => {
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
        {items.map((item, index) => {
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

const PaginationCarousel = ({ save, items }) => {
  return (
    <div className={[space['p-v--15']].join(' ')}>
      <div
        style={{
          display: 'flex',
          marginLeft: -6,
          marginRight: -6,
          overflow: 'auto',
        }}>
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={[sectionStyles['w__pagination--carousel']].join(' ')}
              style={{
                paddingLeft: 6,
                paddingRight: 6,
              }}>
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

const MultipleRows = ({ items, save }) => {
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
        {items.map((item, index) => {
          console.log('index', index);
          return (
            <div className={evaluateNumber(index)}>
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
