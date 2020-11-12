import React from 'react';
import space from '../../styles/space.module.scss';
import layout from '../../styles/layout.module.scss';
import index from '../../styles/index.module.scss';

import { HomesLayoutProps } from './props';

export const HomesLayout: React.FC<HomesLayoutProps> = ({
  title = 'Title here',
  children,
  spread = false,
}) => {
  return (
    <div className={`${[space['p-v--25'], index['p__category']].join(' ')}`}>
      <div
        className={`${
          spread
            ? [layout['container--spread']].join(' ')
            : [layout['container']].join(' ')
        } `}>
        <div className={[space['p-v--16']].join(' ')}>
          {title && (
            <h3 className={`${[layout['font__section--title']].join(' ')} `}>
              {title}
            </h3>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
