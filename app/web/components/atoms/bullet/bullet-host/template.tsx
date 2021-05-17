import { Icon } from '@icons';
import { useHostBulletTemplate } from './template-logic';

export type HostTypeVariants = 'review' | 'verified' | 'superhost';
export interface HostBulletTemplateProps {
  total: number;
  hostType: HostTypeVariants;
}

/**
 * Renders the host bullet
 * @param {string} categoryType - Type of host bullet
 * @param {number} total - Number of reviews
 */
export const HostBulletTemplate: React.FC<HostBulletTemplateProps> = ({
  hostType,
  total,
}) => {
  const { icon, description } = useHostBulletTemplate({
    hostType,
    total,
  });
  return (
    <div className="flex items-center mr-5">
      <div className="mr-2">
        <Icon width={16} {...icon} />
      </div>
      <p className="font-thin">{description}</p>
    </div>
  );
};
