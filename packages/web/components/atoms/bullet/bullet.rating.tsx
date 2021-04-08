import { Icon, $Icon } from '@icons';

export interface RatingBulletProps {
  ratings?: number;
  reviews?: number;
}

/**
 * Renders the rating bullet
 * @param {number} ratings - Average ratings from users
 * @param {number} reviews - Total number of reviews
 */
const RatingBullet: React.FC<RatingBulletProps> = ({
  ratings = 5,
  reviews = 100,
}) => {
  return (
    <div className="flex items-center">
      <div>
        <Icon variant={$Icon.PROFILE} profileType="star" height={14} />
      </div>
      <h3 className="pl-1 text-gray-600 text-sm">{ratings}</h3>
      <span className="pl-1 text-gray-400 text-sm font-thin">({reviews})</span>
    </div>
  );
};

export const rating = (props) => {
  return {
    rating: { component: <RatingBullet {...props} /> },
  };
};
