import React from 'react';
import styles from '../../../styles/index.module.scss';
import space from '../../../styles/space.module.scss';

import { Card } from '../../../components/atoms/card/card.component';

interface Props {
  items: any;
}

export const CategorySection: React.FC<Props> = ({
  items = [undefined, undefined, undefined],
}) => {
  return (
    <div
      className={[styles['container--carousel'], space['p-h--70']].join(' ')}>
      <div className={[styles['category-section__carousel']].join(' ')}>
        {items.map((item, index) => {
          return (
            <Card
              type='landing'
              key={index}
              card={item && item.card}
              to={item && item.to}
            />
          );
        })}
        <div className={styles['category-section__card--space']}></div>
      </div>
    </div>
  );
};
