import React from 'react';
import space from '../../styles/space.module.scss';
import layout from '../../styles/layout.module.scss';
import index from '../../styles/index.module.scss';
import font from '../../styles/font.module.scss';

import { HomesLayoutProps } from './props';

export const HomesLayout: React.FC<HomesLayoutProps> = ({
  title = 'Title here',
  children,
  spread = false,
}) => {
  return (
    <div className={[space['p-v--32']].join(' ')}>
      <div className={`${[space['p__homes']].join(' ')}`}>
        <div>
          <div className={[space['m-b--32']].join(' ')}>
            {title && (
              <h1 className={`${[font['size--40']].join(' ')} `}>{title}</h1>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
