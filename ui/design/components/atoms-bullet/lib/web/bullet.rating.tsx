/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Star } from '@nextbnb/design/assets/svg/original';
import { $BULLET } from '..';

/**
 * Renders the rating bullet
 * @param {number} ratings - Average ratings from users
 * @param {number} reviews - Total number of reviews
 */
const RatingBullet: React.FC<{
  ratings?: number;
  reviews?: number;
}> = ({ ratings = 5, reviews = 100 }) => {
  return (
    <div css={{ display: 'flex' }}>
      <div>
        <Star height={14} />
      </div>
      <h3 css={{ paddingLeft: 4, color: 'grey.700', fontSize: 14 }}>
        {ratings}
      </h3>
      <span
        css={{
          paddingLeft: 4,
          color: 'grey.600',
          fontSize: 14,
          fontWeight: 100,
        }}
      >
        ({reviews})
      </span>
    </div>
  );
};

export const rating = (props) => {
  return {
    [$BULLET.rating]: {
      component: <RatingBullet {...props} />,
      css: {},
    },
  };
};
