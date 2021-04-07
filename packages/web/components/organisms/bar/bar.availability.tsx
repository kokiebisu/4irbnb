import { Button, $Button } from '@button';
import { $Icon, Icon } from '@icons';

/**
 * Renders the modal which gives all the available options
 * @param {number} ratings - Average ratings from the users
 * @param {number} reviews - Total number of reviews from the users
 */
export const AvailabilityBar: React.FC<{
  ratings?: number;
  reviews?: number;
}> = ({ ratings = 4.99, reviews = 271 }) => {
  return (
    <div className="items-center justify-between flex border-t border-gray-300">
      <div className="py-4">
        <p>Add dates for prices</p>
        <div className="flex items-center">
          <div>
            <Icon variant={$Icon.PROFILE} profileType="star" width={12} />
          </div>
          <div>
            <span className="inline-block text-xs ml-1">{ratings}</span>
            <span className="inline-block text-xs text-gray-400 ml-1">
              ({reviews})
            </span>
          </div>
        </div>
      </div>
      <div>
        <Button variant={$Button.PRIMARY} title="Check availability" />
      </div>
    </div>
  );
};
