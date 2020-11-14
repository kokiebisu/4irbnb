import React from 'react';

/**
 * Styles
 */
import section from './section.module.scss';
import space from '../../../styles/space.module.scss';

/**
 * Components
 */
import { Card } from '../../../components/atoms/card/card.component';

/**
 * Props
 */
import { CategorySectionProps } from './props';

/**
 *
 * @param {Object[]} items - List of categories to be displayed
 */
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
                imgUrl={item && item.imgUrl}
                title={item && item.title}
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
