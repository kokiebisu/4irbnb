import React from 'react';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import animation from '../../../styles/animation.module.scss';
import modal from './modal.module.scss';

export const MenuModal = () => {
  return (
    <div
      className={[
        shape['br--15'],
        shape['shadow'],
        layout['items-center'],
        color['bg--white__0'],
      ].join(' ')}
      style={{ width: 245, height: 220 }}>
      <div className={[shape['w--inherit']].join(' ')}>
        <div>
          <button
            className={[
              shape['w--full'],
              font['text--left'],
              font['size--14'],
              color['bg--white__0'],
              space['p-h--14'],
              space['p-v--10'],
              layout['block'],
              animation['hover-background--white__1'],
            ].join(' ')}>
            Sign up
          </button>
        </div>
        <div>
          <button
            className={[
              font['weight--300'],
              shape['w--full'],
              font['text--left'],
              font['size--14'],
              color['bg--white__0'],
              space['p-h--14'],
              space['p-v--10'],
              layout['block'],
              animation['hover-background--white__1'],
            ].join(' ')}>
            Log in
          </button>
        </div>
        <div>
          <button
            className={[
              font['weight--300'],
              shape['w--full'],
              font['text--left'],
              font['size--14'],
              color['bg--white__0'],
              space['p-h--14'],
              space['p-v--10'],
              layout['block'],
              animation['hover-background--white__1'],
            ].join(' ')}>
            Host your home
          </button>
        </div>
        <div>
          <button
            className={[
              font['weight--300'],
              shape['w--full'],
              font['text--left'],
              font['size--14'],
              color['bg--white__0'],
              space['p-h--14'],
              space['p-v--10'],
              layout['block'],
              animation['hover-background--white__1'],
            ].join(' ')}>
            Host an experience
          </button>
        </div>
        <div>
          <button
            className={[
              font['weight--300'],
              shape['w--full'],
              font['text--left'],
              font['size--14'],
              color['bg--white__0'],
              space['p-h--14'],
              space['p-v--10'],
              layout['block'],
              animation['hover-background--white__1'],
            ].join(' ')}>
            Help
          </button>
        </div>
      </div>
    </div>
  );
};
