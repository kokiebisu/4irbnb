import card from '@card/card.module.scss';
import { renderSize } from './logic/logic.nearby';

export interface NearbyCardProps {
  imgUrl?: string;
  city?: string;
  hours?: number;
  size?: 'sm' | 'lg';
}

/**
 * Renders the nearby card component
 * @param {string} imgUrl - Image of the card
 * @param {string} city - Name of the city
 * @param {number} hours - Time it takes to reach the destination
 * @param {string} size - Size of the component
 */
const NearbyCard: React.FC<NearbyCardProps> = ({
  imgUrl,
  city = 'City',
  hours = 1,
  size = 'sm',
}) => {
  return (
    <div className="flex items-center">
      <div className={`${renderSize(card, size)} mr-3`}>
        {imgUrl ? (
          <img src={imgUrl} className="rounded-md" />
        ) : (
          <div className="w-12 h-12 rounded-md bg-gray-400" />
        )}
      </div>
      <div>
        <h3 className="text-sm mb-1">{city}</h3>
        <p className="text-sm">{hours} hour drive</p>
      </div>
    </div>
  );
};

export const nearby = (props) => {
  return {
    nearby: {
      component: <NearbyCard {...props} />,
      style: '',
    },
  };
};
