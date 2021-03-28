/** styles **/
import layout from '@styles/layout.module.scss';
import space from '@styles/space.module.scss';
import font from '@styles/font.module.scss';

/** vectors */
import { Star, Superhost, Verified } from '@svg/original';

/**
 * Renders the host bullet
 * @param {string} categoryType - Type of host bullet
 * @param {number} total - Number of reviews
 */
export const HostBullet: React.FC<{
  total?: number;
  categoryType?: string;
}> = ({ categoryType = 'review', total = 100 }) => {
  const categories = {
    review: { icon: <Star width={16} />, description: `${total} Reviews` },
    verified: {
      icon: <Verified width={16} />,
      description: 'Identity verified',
    },
    superhost: { icon: <Superhost width={16} />, description: 'Superhost' },
  };
  return (
    <div className="flex items-center mr-6">
      <div className="mr-2">{categories[categoryType].icon}</div>
      <p className="font-thin">{categories[categoryType].description}</p>
    </div>
  );
};
