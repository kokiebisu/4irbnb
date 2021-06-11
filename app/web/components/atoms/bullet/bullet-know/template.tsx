import { Icon } from 'components/atoms/icon';
import { useKnowBulletTemplate } from './use-template';

export type KnowTypeVariants =
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
export type KnowBulletTemplateProps = {
  knowType: KnowTypeVariants;
  checkin: { min: string; max: string };
  checkout: string;
};

/**
 * Renders the know bullet
 * @param {string} categoryType - Type of know bullet
 * @param {Object[]} checkin - Time range for checkin
 * @param {string} checkout - Time for checkin
 */
export const KnowBulletTemplate = ({
  knowType,
  checkin,
  checkout,
}: KnowBulletTemplateProps): JSX.Element => {
  const { icon, description } = useKnowBulletTemplate({
    knowType,
    checkin,
    checkout,
  });
  return (
    <div className="flex">
      <div className="mr-3">
        <Icon {...icon} />
      </div>
      <div>
        <p className="font-thin text-base">{description}</p>
      </div>
    </div>
  );
};
