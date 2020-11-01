import React from 'react';
import layout from '../../../styles/layout.module.scss';
import staysDetail from '../../../styles/staysDetail.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';
import shape from '../../../styles/shape.module.scss';
import { Heart, Star, Share, Superhost } from '../../../public/svg/original';
import section from './section.module.scss';

interface Props {
  title: string;
  ratings: number;
  numberOfReviews: number;
  superhost: boolean;
  location: string;
  province: string;
  country: string;
}

export const PanelSection: React.FC<Props> = ({
  title = 'Title here',
  ratings = 5.0,
  numberOfReviews = 100,
  superhost = false,
  location = 'City',
  province = 'Province',
  country = 'Country',
}) => {
  return (
    <>
      <div className={[space['p-v--15']].join(' ')}>
        <h3
          className={[
            color['c--gray__4'],
            font['size--28'],
            font['weight--500'],
          ].join(' ')}>
          {title}
        </h3>
        <div
          className={[layout['items-center'], layout['justify-between']].join(
            ' '
          )}>
          <div
            className={[layout['items-center'], layout['flex-wrap']].join(' ')}>
            <div>
              <Star height={14} />
            </div>
            <p
              className={[
                space['p-l--4'],
                color['c--g__2'],
                font['size--14'],
                font['weight--300'],
              ].join(' ')}>
              {ratings} ({numberOfReviews})
            </p>
            {superhost && (
              <>
                <span className={[color['c--gray__1']].join(' ')}>
                  &nbsp;·&nbsp;
                </span>
                <div>
                  <Superhost height={14} fill='#E61E4D' />
                </div>
                <p
                  className={[
                    space['p-l--3'],
                    color['c--gray__1'],
                    font['size--14'],
                    font['weight--300'],
                  ].join(' ')}>
                  Superhost
                </p>
              </>
            )}
            <span className={[color['c--gray__1']].join(' ')}>
              &nbsp;·&nbsp;
            </span>
            <a
              className={[font['size--14'], color['c--gray__1']].join(' ')}
              href=''>
              <u>
                {location}, {province}, {country}
              </u>
            </a>
          </div>
          <div
            className={[layout['flex'], section['hidden__options']].join(' ')}>
            <div
              className={[space['p-r--6'], layout['items-center']].join(' ')}>
              <div
                className={[space['p-l--6'], layout['items-center']].join(' ')}>
                <div>
                  <Share height={14} fill='#484848' />
                </div>
                <p
                  className={[
                    space['p-l--6'],
                    font['size--14'],
                    color['c--gray__1'],
                  ].join(' ')}>
                  <u>Share</u>
                </p>
              </div>
              <div
                className={[space['p-l--4'], layout['items-center']].join(' ')}>
                <div>
                  <Heart fill='#484848' height={14} />
                </div>
                <u
                  className={[
                    space['p-l--5'],
                    font['size--14'],
                    color['c--gray__1'],
                  ].join(' ')}>
                  Save
                </u>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={[layout['flex'], shape['h--50p']].join(' ')}>
        <div
          style={{
            borderRight: '4px solid white',
            borderRadius: 5,
          }}
          className={[
            shape['background-cover'],
            shape['background-repeat'],
            layout['relative'],
            layout['overflow-hidden'],
            section['w__panel--image'],
          ].join(' ')}>
          <img
            className={[
              shape['background-cover'],
              shape['background-repeat'],
            ].join(' ')}
            src='https://a0.muscache.com/im/pictures/2ad05257-9bda-4dec-b39e-709d0442ee68.jpg?aki_policy=x_large'
          />
        </div>
        <div
          className={[
            shape['w--50p'],
            layout['relative'],
            staysDetail['hidden__panel'],
          ].join(' ')}>
          <div
            className={[
              shape['w--full'],
              shape['h--full'],
              layout['flex'],
              layout['flex-wrap'],
            ].join(' ')}>
            <div
              style={{
                borderRadius: 5,
                borderLeft: '4px solid white',
                borderRight: '4px solid white',
                borderBottom: '4px solid white',
              }}
              className={[
                shape['h--50p'],
                layout['overflow-hidden'],
                layout['relative'],
                section['w__panel--image'],
              ].join(' ')}>
              <img
                className={[
                  shape['background-cover'],
                  shape['background-repeat'],
                ].join(' ')}
                src='https://a0.muscache.com/im/pictures/2ad05257-9bda-4dec-b39e-709d0442ee68.jpg?aki_policy=x_large'
              />
            </div>
            <div
              style={{
                borderRadius: 5,
                borderLeft: '4px solid white',
                borderBottom: '4px solid white',
              }}
              className={[
                shape['h--50p'],
                layout['overflow-hidden'],
                layout['relative'],
                section['w__panel--image'],
              ].join(' ')}>
              <img
                className={[
                  shape['background-cover'],
                  shape['background-repeat'],
                ].join(' ')}
                src='https://a0.muscache.com/im/pictures/2ad05257-9bda-4dec-b39e-709d0442ee68.jpg?aki_policy=x_large'
              />
            </div>
            <div
              style={{
                borderRadius: 5,
                borderLeft: '4px solid white',
                borderTop: '4px solid white',
                borderRight: '4px solid white',
              }}
              className={[
                shape['h--50p'],
                layout['overflow-hidden'],
                layout['relative'],
                section['w__panel--image'],
              ].join(' ')}>
              <img
                className={[
                  shape['background-cover'],
                  shape['background-repeat'],
                ].join(' ')}
                src='https://a0.muscache.com/im/pictures/2ad05257-9bda-4dec-b39e-709d0442ee68.jpg?aki_policy=x_large'
              />
            </div>
            <div
              style={{
                borderRadius: 5,
                borderLeft: '4px solid white',
                borderTop: '4px solid white',
              }}
              className={[
                shape['h--50p'],
                layout['overflow-hidden'],
                layout['relative'],
                section['w__panel--image'],
              ].join(' ')}>
              <img
                className={[
                  shape['background-cover'],
                  shape['background-repeat'],
                ].join(' ')}
                src='https://a0.muscache.com/im/pictures/2ad05257-9bda-4dec-b39e-709d0442ee68.jpg?aki_policy=x_large'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
