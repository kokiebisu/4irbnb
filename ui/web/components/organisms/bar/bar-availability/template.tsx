import { Button } from '@button';
import { Icon } from '@icons';

export interface AvailabilityBarTemplateProps {
  ratings?: number;
  reviews?: number;
}

/**
 * Renders the modal which gives all the available options
 * @param {number} ratings - Average ratings from the users
 * @param {number} reviews - Total number of reviews from the users
 */
export const AvailabilityBarTemplate: React.FC<AvailabilityBarTemplateProps> = ({
  ratings,
  reviews,
}) => {
  return (
    <div className="items-center justify-between flex border-t border-gray-300">
      <div className="py-4">
        <p>Add dates for prices</p>
        <div className="flex items-center">
          <div>
            <Icon variant={'profile'} profileType="star" width={12} />
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
        <Button
          variant="primary"
          title="Check availability"
          color="white"
          size="sm"
        />
      </div>
    </div>
  );
};
