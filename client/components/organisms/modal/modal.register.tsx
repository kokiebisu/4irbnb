import React from 'react';
import layout from '../../../styles/layout.module.scss';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import { Close } from '../../../public/svg/original';

export const RegisterModal: React.FC<{}> = () => {
  return (
    <div
      style={{ width: 550, height: 650 }}
      className={[shape['shadow'], shape['br--16']].join(' ')}>
      <div
        style={{ height: 60 }}
        className={[
          layout['items-center'],
          color['b-b--white__1'],
          space['p-h--24'],
        ].join(' ')}>
        <div className={[layout['relative'], shape['w--full']].join(' ')}>
          <div className={[layout['al--0'], layout['t--2']].join(' ')}>
            <Close width={16} height={16} stroke='black' strokeWidth={2} />
          </div>
          <div className={[layout['all-center']].join(' ')}>Sign up</div>
        </div>
      </div>
      <div>content</div>
    </div>
  );
};
