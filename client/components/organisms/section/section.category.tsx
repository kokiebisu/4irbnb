import React from 'react';
import section from './section.module.scss';
import space from '../../../styles/space.module.scss';

import { Card } from '../../../components/atoms/card/card.component';
import { CategorySectionProps } from './props';

export const CategorySection: React.FC<CategorySectionProps> = ({
  items = [undefined, undefined, undefined],
}) => {
  const totalCards = items.length;

  return (
    <div>
      <div className={[space['p-h--70']].join(' ')}>
        <div
          style={{ gridTemplateColumns: `repeat(${totalCards}, 1fr)` }}
          className={[section['category-section__carousel']].join(' ')}>
          {items.map((item, index) => {
            return (
              <Card
                type='category'
                key={index}
                card={item && item.card}
                to={item && item.to}
              />
            );
          })}
          <div className={section['category-section__card--space']}></div>
        </div>
      </div>
    </div>
  );
};
