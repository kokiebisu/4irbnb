import React from 'react';
import { OnlineCardProps } from './props';

import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import shape from '../../../styles/shape.module.scss';

export const OnlineCard: React.FC<OnlineCardProps> = ({
  imgUrl = 'https://a0.muscache.com/im/pictures/78010337-07f0-4154-9528-363b97b54699.jpg',
  title = 'Learn to make soup dumplings in Shanghai',
}) => {
  return (
    <div>
      <div>
        <picture>
          <source
            className={[shape['btr--15']].join(' ')}
            style={{ verticalAlign: 'bottom' }}
            srcSet={`${imgUrl}?im_w=320`}
            media='(max-width: 743px)'></source>
          <source
            className={[shape['btr--15']].join(' ')}
            style={{ verticalAlign: 'bottom' }}
            srcSet={`${imgUrl}?im_w=480`}
            media='(min-width: 743.1px) and (max-width: 1127px)'></source>
          <source
            className={[shape['btr--15']].join(' ')}
            style={{ verticalAlign: 'bottom' }}
            srcSet={`${imgUrl}?im_w=480`}
            media='(min-width: 1127.1px) and (max-width: 1439px)'></source>
          <source
            className={[shape['btr--15']].join(' ')}
            style={{ verticalAlign: 'bottom' }}
            srcSet={`${imgUrl}?im_w=720`}
            media='(min-width: 1439.1px)'></source>
          <img
            className={[shape['btr--15']].join(' ')}
            style={{ verticalAlign: 'bottom' }}
            aria-hidden='true'
            decoding='async'
            src={`${imgUrl}?im_w=720`}></img>
        </picture>
      </div>
      <div
        style={{ minHeight: 75 }}
        className={[color['bg--gray__2'], shape['bbr--15']].join(' ')}>
        <div style={{ padding: 15 }}>
          <h3 className={[color['c--white__0'], font['size--15']].join(' ')}>
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};
