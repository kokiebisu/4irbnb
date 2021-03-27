import { Star } from '@svg/original';

/**
 * Renders the rating bullet
 * @param {number} ratings - Average ratings from users
 * @param {number} reviews - Total number of reviews
 */
export const RatingBullet: React.FC<{
  ratings?: number;
  reviews?: number;
}> = ({ ratings = 5, reviews = 100 }) => {
  return (
    <div className="flex ">
      <div>
        <Star height={14} />
      </div>
      <h3 className="pl-1 text-gray-600 text-sm">{ratings}</h3>
      <span className="pl-1 text-gray-200 text-sm font-thin">({reviews})</span>
    </div>
  );
};
