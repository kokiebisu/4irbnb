/** styles **/
import space from '@styles/space.module.scss';
import layout from '@styles/layout.module.scss';
import font from '@styles/font.module.scss';
import card from '@card/card.module.scss';

/** Logic */
import { renderSize } from './logic/logic.nearby';

/**
 * Renders the nearby card component
 * @param {string} imgUrl - Image of the card
 * @param {string} city - Name of the city
 * @param {number} hours - Time it takes to reach the destination
 * @param {string} size - Size of the component
 */
export const NearbyCard: React.FC<{
  imgUrl?: string;
  city?: string;
  hours?: number;
  size?: 'sm' | 'lg';
}> = ({ imgUrl, city = 'City', hours = 1, size = 'sm' }) => {
  return (
    <div className="flex items-center">
      <div className={`${renderSize(card, size)} mr-3`}>
        {imgUrl ? (
          <img src={imgUrl} style={{ borderRadius: 10 }} />
        ) : (
          <div className="w-20 h-20 rounded-md bg-gray-200" />
        )}
      </div>
      <div>
        <h3 className="text-sm mb-1">{city}</h3>
        <p className="text-sm">{hours} hour drive</p>
      </div>
    </div>
  );
};
