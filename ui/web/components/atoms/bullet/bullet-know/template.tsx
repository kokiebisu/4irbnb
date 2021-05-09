import { Icon } from '@icons';
import { useKnowBulletContent } from './content';

export interface KnowBulletTemplateProps {
  knowType?:
    | 'checkin'
    | 'checkout'
    | 'self'
    | 'children'
    | 'smoking'
    | 'pets'
    | 'parties'
    | 'cleaning'
    | 'distancing'
    | 'caution'
    | 'check';
  checkin?: { min: string; max: string };
  checkout?: string;
}

/**
 * Renders the know bullet
 * @param {string} categoryType - Type of know bullet
 * @param {Object[]} checkin - Time range for checkin
 * @param {string} checkout - Time for checkin
 */
export const KnowBulletTemplate: React.FC<KnowBulletTemplateProps> = ({
  knowType,
  checkin,
  checkout,
}) => {
  const { icon, description } = useKnowBulletContent({
    knowType,
    checkin,
    checkout,
  });
  return (
    <div className="flex">
      <div className="mr-3">
        <Icon {...icon} width={14} />
      </div>
      <div>
        <p className="font-thin text-base">{description}</p>
      </div>
    </div>
  );
};
