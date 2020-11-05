import React from 'react';
import { SectionLayoutProps } from './props';

import space from '../styles/space.module.scss';
import section from '../components/organisms/section/section.module.scss';
import layout from '../styles/layout.module.scss';
import index from '../styles/index.module.scss';

export const SectionLayout: React.FC<SectionLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <div className={[space['m-v--50'], index['p__category']].join(' ')}>
      <div className={[layout['container']].join(' ')}>
        {title && (
          <div className={[space['m-v--16']].join(' ')}>
            <h3 className={[section['font__category']].join(' ')}>{title}</h3>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
