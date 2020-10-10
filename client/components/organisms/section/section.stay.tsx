import React, { useRef } from 'react';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import shape from '../../../styles/shape.module.scss';
import font from '../../../styles/font.module.scss';
import color from '../../../styles/color.module.scss';
import { Card } from '../../atoms/card/card.component';
import { typeStays } from '../../../content';
import { Button } from '../../../components/atoms/button/button.component';
import sectionStyles from './section.module.scss';
import { horizontals } from '../../../data';
import { Heart } from '../../../public/svg/original';
import { ChevronLeft, ChevronRight } from '../../../public/svg/regular';

interface Props {
  title?: string;
  description?: string;
  pagination?: boolean;
  showAll?: any;
  type?: string;
  carouselType?: string;
  save?: boolean;
}

export const StaySection: React.FC<Props> = ({
  title,
  description,
  pagination,
  showAll,
  carouselType,
  save,
}) => {
  const displayCarousel = (carouselType, save = false) => {
    switch (carouselType) {
      case 'stayTypes':
        return <TypeStayCarousel />;
      case 'pagination':
        return <PaginationCarousel save={save} />;
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
            {description && (
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
                    1 / 9
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
        {displayCarousel(carouselType, save)}
      </div>
      <div className={[layout['relative']].join(' ')}>
        {showAll && (
          <div className={space['m-v--12']}>
            <Button
              extendsTo={[font['weight--500']].join(' ')}
              onPress={() => console.log('clicked')}
              to={showAll.url}>
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

const TypeStayCarousel = () => {
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
        {typeStays.map((typeStay) => {
          return (
            <li
              className={[
                sectionStyles['w__card'],
                sectionStyles['flex__card'],
              ].join(' ')}
              style={{
                scrollSnapAlign: 'start',
                borderLeftStyle: 'solid',
                borderLeftColor: 'transparent',
              }}>
              <Card type='typestay' card={typeStay} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const PaginationCarousel = ({ ...props }) => {
  return (
    <div style={{ paddingTop: 15, paddingBottom: 15 }}>
      <div style={{ display: 'flex', marginLeft: -6, marginRight: -6 }}>
        {horizontals.map((horizontal) => {
          return (
            <div style={{ width: '25%', paddingLeft: 6, paddingRight: 6 }}>
              <Card type='horizontal' card={horizontal} {...props} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
