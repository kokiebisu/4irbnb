import React from 'react';
import layout from '../../../styles/layout.module.scss';
import shape from '../../../styles/shape.module.scss';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import { Heart } from '../../../public/svg/original';

interface Props {
  card?: any;
  save?: boolean;
  superhost?: boolean;
}

export const HorizontalCard: React.FC<Props> = ({
  card = {
    imgUrl:
      'https://a0.muscache.com/im/pictures/7e0063fa-d325-49ae-a6f6-285fe9928da4.jpg?im_w=720',
    type: 'Type of Stay',
    ratings: 5.0,
    location: 'Location',
    title: 'Title should be here',
    number_of_reviews: 100,
  },
  superhost = false,
  save = false,
}) => {
  return (
    <div>
      <div style={{ position: 'relative', paddingTop: '66.6%' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}>
          <div style={{ height: '100%' }}>
            <div className={[layout['relative'], shape['h--full']].join(' ')}>
              <div className={[shape['br--12'], shape['h--full']].join(' ')}>
                <img
                  style={{ objectFit: 'cover' }}
                  className={[shape['br--12'], shape['h--full']].join(' ')}
                  src={card.imgUrl}
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
                    superhost
                      ? [].join(' ')
                      : [color['c--white__0'], shape['hidden']].join(' ')
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
                      : [color['c--white__0'], shape['hidden']].join(' ')
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
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', marginTop: 6 }}>
        <div className={[space['m-r--3']].join(' ')}>
          <svg fill='#F5385D' width={14} viewBox='0 0 1000 1000'>
            <path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z' />
          </svg>
        </div>
        <div className={[space['m-r--3']].join(' ')}>
          <p className={[font['weight--100'], font['size--13']].join(' ')}>
            {card.ratings.toFixed(2)}
          </p>
        </div>
        <div>
          <p
            className={[
              font['weight--100'],
              font['size--13'],
              color['c--gray__0'],
            ].join(' ')}>{`(${card.number_of_reviews})`}</p>
        </div>
      </div>
      <div className={[layout['items-center']].join(' ')}>
        <div>
          <p
            className={[
              font['ls--4'],
              font['weight--100'],
              font['size--15'],
              color['c--gray__4'],
            ].join(' ')}>
            {card.type}
          </p>
        </div>
        <div>
          <p>&nbsp; · &nbsp; </p>
        </div>
        <div>
          <p
            className={[
              font['ls--4'],
              font['weight--100'],
              font['size--15'],
              color['c--gray__4'],
            ].join(' ')}>
            {card.location}
          </p>
        </div>
      </div>
      <div>
        <p
          style={{
            maxHeight: 250,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          className={[
            font['ls--4'],
            font['weight--100'],
            font['size--15'],
            color['c--gray__4'],
          ].join(' ')}>
          {card.title}
        </p>
      </div>
    </div>
  );
};
