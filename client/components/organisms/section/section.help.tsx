import { Layout } from '../../../layout/layout.component';
import React from 'react';
import { Bullet } from '../../../components/atoms/bullet/bullet.component';
import { HelpSectionProps } from './props';
import layout from '../../../styles/layout.module.scss';
import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';

export const HelpSection: React.FC<HelpSectionProps> = () => {
  const helps = ['support', 'tools', 'insights', 'education'];
  return (
    <div className={[layout['flex']].join(' ')}>
      <div style={{ width: '50%' }} className={[].join(' ')}>
        <h1 className={[font['size--40']].join(' ')}>We're here to help</h1>
      </div>
      <div style={{ width: '50%' }} className={[].join(' ')}>
        <div>
          {helps.map((help, index) => {
            return (
              <div key={index} className={[space['m-b--24']].join(' ')}>
                <Bullet type='help' help={help} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
