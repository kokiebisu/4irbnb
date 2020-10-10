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
      {console.log('carousel', carouselType)}
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
        <div>{pagination && <div>pagination</div>}</div>
      </div>
      {displayCarousel(carouselType, save)}
      <div>
        {showAll && (
          <div>
            <Button onPress={() => console.log('clicked')} to={showAll.url}>
              {showAll.description}
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

const PaginationCarousel = ({ save }) => {
  return (
    <div style={{ paddingTop: 15, paddingBottom: 15 }}>
      <div style={{ display: 'flex' }}>
        {horizontals.map((horizontal) => {
          return (
            <div style={{ width: '25%' }}>
              <div style={{ position: 'relative', paddingTop: '66.6%' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                  }}>
                  <div style={{ marginRight: 10 }}>
                    <div className={[layout['relative']].join(' ')}>
                      <div className={[shape['br--12']].join(' ')}>
                        <img
                          className={[shape['br--12']].join(' ')}
                          src={horizontal.imgUrl}
                        />
                      </div>
                      <div
                        className={[
                          space['p-v--8'],
                          space['p-h--10'],
                          layout['at--0'],
                          layout['justify-between'],
                          shape['w--full'],
                        ].join(' ')}>
                        <div
                          className={
                            horizontal.superhost
                              ? [].join(' ')
                              : [color['c--white__0'], shape['hidden']].join(
                                  ' '
                                )
                          }>
                          <div
                            className={[
                              space['p-h--8'],
                              space['p-v--4'],
                              color['bg--white__1'],
                              shape['shadow--lg'],
                              shape['br--3'],
                            ].join(' ')}>
                            <p
                              className={[
                                font['size--12'],
                                font['uppercase'],
                                font['ls--3'],
                              ].join(' ')}>
                              Superhost
                            </p>
                          </div>
                        </div>
                        <div
                          className={
                            save
                              ? [color['c--white__0']].join(' ')
                              : [color['c--white__0'], shape['hidden']].join(
                                  ' '
                                )
                          }>
                          <Heart
                            fill='rgba(0, 0, 0, 0.5)'
                            width={24}
                            stroke='rgb(255, 255, 255)'
                            strokeWidth={2}
                          />
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <div className={[space['m-r--3']].join(' ')}>
                        <svg fill='#F5385D' width={14} viewBox='0 0 1000 1000'>
                          <path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z' />
                        </svg>
                      </div>
                      <div className={[space['m-r--3']].join(' ')}>
                        <p
                          className={[
                            font['weight--100'],
                            font['size--13'],
                          ].join(' ')}>
                          {horizontal.ratings}
                        </p>
                      </div>
                      <div>
                        <p
                          className={[
                            font['weight--100'],
                            font['size--13'],
                            color['c--gray__0'],
                          ].join(' ')}>{`(${horizontal.number_of_reviews})`}</p>
                      </div>
                    </div>
                    <div>
                      <p
                        className={[
                          font['ls--4'],
                          font['weight--100'],
                          font['size--15'],
                          color['c--gray__4'],
                        ].join(' ')}>
                        {horizontal.type}
                      </p>
                    </div>
                    <div>
                      <p
                        className={[
                          font['ls--4'],
                          font['weight--100'],
                          font['size--15'],
                          color['c--gray__4'],
                        ].join(' ')}>
                        {horizontal.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
