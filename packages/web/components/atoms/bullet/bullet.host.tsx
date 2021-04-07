import layout from '@styles/layout.module.scss';
import space from '@styles/space.module.scss';
import font from '@styles/font.module.scss';

import { $Icon, Icon } from '@icons';

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
    review: {
      icon: <Icon variant={$Icon.PROFILE} profileType="star" width={16} />,
      description: `${total} Reviews`,
    },
    verified: {
      icon: <Icon variant={$Icon.PROFILE} profileType="verified" width={16} />,
      description: 'Identity verified',
    },
    superhost: {
      icon: <Icon variant={$Icon.PROFILE} profileType="superhost" width={16} />,
      description: 'Superhost',
    },
  };
  return (
    <div
      className={[
        layout['flex'],
        layout['items-center'],
        space['m-r--18'],
      ].join(' ')}
    >
      <div className={[space['m-r--8']].join(' ')}>
        {categories[categoryType].icon}
      </div>
      <p className={[font['weight--100']].join(' ')}>
        {categories[categoryType].description}
      </p>
    </div>
  );
};

export const host = (props) => {
  return {
    host: { component: <HostBullet {...props} /> },
  };
};
