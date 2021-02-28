/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Star, Superhost, Verified } from '@nextbnb/design/assets/svg/original';
import { $BULLET } from '..';

/**
 * Renders the host bullet
 * @param {string} categoryType - Type of host bullet
 * @param {number} total - Number of reviews
 */
const HostBullet: React.FC<{
  total?: number;
  categoryType?: string;
}> = ({ categoryType = 'review', total = 100 }) => {
  const categories: {
    [type: string]: { icon: JSX.Element; description: string };
  } = {
    review: { icon: <Star width={16} />, description: `${total} Reviews` },
    verified: {
      icon: <Verified width={16} />,
      description: 'Identity verified',
    },
    superhost: { icon: <Superhost width={16} />, description: 'Superhost' },
  };
  return (
    <div css={{ display: 'flex', alignItems: 'center', marginRight: 18 }}>
      <div css={{ marginRight: 8 }}>{categories[categoryType].icon}</div>
      <p css={{ fontWeight: 100 }}>{categories[categoryType].description}</p>
    </div>
  );
};

export const host = (props) => {
  return {
    [$BULLET.host]: {
      component: <HostBullet {...props} />,
      css: {},
    },
  };
};
