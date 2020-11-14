import { Button } from '../../../components/atoms/button/button.component';
import React from 'react';
import { ReadySectionProps } from './props';
import space from '../../../styles/space.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';

export const ReadySection: React.FC<ReadySectionProps> = () => {
  return (
    <div className={[layout['flex']].join(' ')}>
      <div style={{ width: '50%' }} className={[].join(' ')}>
        <h1 className={[font['size--40']].join(' ')}>Ready to host?</h1>
      </div>
      <div style={{ width: '50%' }} className={[].join(' ')}>
        <div className={[space['m-b--32']].join(' ')}>
          <h4 className={[font['size--20']].join(' ')}>
            Create a listing that fits your hosting style—we'll give you tips to
            make your place shine. Start now and finish any time.
          </h4>
        </div>
        <div style={{ display: 'inline-block' }}>
          <Button size='md' type='primary' title='Get started' />
        </div>
      </div>
    </div>
  );
};
