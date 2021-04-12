import { $Icon, Icon } from '@icons';

export interface HostBulletProps {
  total?: number;
  categoryType?: 'review' | 'verified' | 'superhost';
}

/**
 * Renders the host bullet
 * @param {string} categoryType - Type of host bullet
 * @param {number} total - Number of reviews
 */
export const HostBullet: React.FC<HostBulletProps> = ({
  categoryType,
  total,
}) => {
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
    <div className="flex items-center mr-5">
      <div className="mr-2">{categories[categoryType].icon}</div>
      <p className="font-thin">{categories[categoryType].description}</p>
    </div>
  );
};

export const host = (props) => {
  return {
    host: { component: <HostBullet {...props} /> },
  };
};
