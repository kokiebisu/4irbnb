import React from 'react';
import { Button } from '../../../components/atoms/button/button.component';
import { GetStartedCreateProps } from './props';

import font from '../../../styles/font.module.scss';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';

export const GetStartedCreate: React.FC<GetStartedCreateProps> = () => {
  return (
    <div>
      <div className={[space['m-v--24']].join(' ')}>
        <h4 className={[font['size--28'], color['c--gray__2']].join(' ')}>
          Hi, Kenichi! Let's get started listing your space.
        </h4>
      </div>
      <div className={[space['m-v--8']].join(' ')}>
        <h3 className={[font['size--12'], color['c--gray__1']].join(' ')}>
          STEP 1
        </h3>
      </div>
      <div className={[space['m-b--16']].join(' ')}>
        <h4 className={[font['size--22'], color['c--gray__2']].join(' ')}>
          What kind of place do you have?
        </h4>
      </div>
      <div>
        <form></form>
      </div>
      <div style={{ width: 100 }}>
        <Button type='primary' title='Continue' size='sm' />
      </div>
    </div>
  );
};
