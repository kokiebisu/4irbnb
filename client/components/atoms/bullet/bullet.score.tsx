import React from 'react';

import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import shape from '../../../styles/space.module.scss';
import { ScoreBulletProps } from './props';

export const ScoreBullet: React.FC<ScoreBulletProps> = ({
  category = 'Aspect',
  average = 5.0,
}) => {
  return (
    <div
      className={[
        space['p-v--2'],
        layout['flex'],
        layout['items-center'],
        layout['justify-between'],
        shape['w--50p'],
      ].join(' ')}>
      <p className={[font['weight--300']].join(' ')}>{category}</p>
      <div
        className={[
          layout['flex'],
          layout['items-center'],
          shape['w-full'],
        ].join(' ')}>
        <div style={{ width: '100%' }}>
          <div
            style={{
              backgroundColor: 'lightgray',
              position: 'relative',
              height: 4,
              width: '100%',
            }}>
            <span
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                backgroundColor: 'black',
                width: '50%',
              }}></span>
          </div>
        </div>
        <p className={[space['p-r--16'], font['size--12']].join(' ')}>
          {average}
        </p>
      </div>
    </div>
  );
};
