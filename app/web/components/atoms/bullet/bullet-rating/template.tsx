import { Icon } from '@icons';

export interface RatingBulletTemplateProps {
  ratings?: number;
  reviews?: number;
}

/**
 * Renders the rating bullet
 * @param {number} ratings - Average ratings from users
 * @param {number} reviews - Total number of reviews
 */
export const RatingBulletTemplate: React.FC<RatingBulletTemplateProps> = ({
  ratings,
  reviews,
}) => {
  return (
    <div className="flex items-center">
      <div>
        <Icon variant="profile" profileType="star" width={14} />
      </div>
      <h3 className="pl-1 text-gray-700 text-sm">{ratings}</h3>
      <span className="pl-1 text-gray-600 text-sm font-thin">({reviews})</span>
    </div>
  );
};
