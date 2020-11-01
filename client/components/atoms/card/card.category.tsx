import React from 'react';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import animation from '../../../styles/animation.module.scss';
import styles from '../../../styles/index.module.scss';
import { CategoryCardProps } from './props';

export const CategoryCard: React.FC<CategoryCardProps> = ({
  card = {
    imgUrl: 'img/card2.jpg',
    title: 'Title should be here',
    description: 'Description should be here',
  },
}) => {
  return (
    <div className={styles['category-section__card']}>
      <div className={styles['category-section__card--img']}>
        <img src={card.imgUrl} alt='unique stays' />
      </div>
      <div
        className={[
          space['p-t--10'],
          space['p-r--15'],
          space['p-b--0'],
          space['p-l--15'],
        ].join(' ')}>
        <h3
          className={[
            font['weight--500'],
            font['size--17'],
            color['c--gray__4'],
          ].join(' ')}>
          {card.title}
        </h3>
      </div>
      <div
        className={[
          space['p-t--5'],
          space['p-r--15'],
          space['p-b--15'],
          space['p-l--15'],
        ].join(' ')}>
        <p
          className={[
            font['size--15'],
            font['weight--300'],
            color['c--gray__1'],
          ].join(' ')}>
          {card.description}
        </p>
      </div>
    </div>
  );
};
