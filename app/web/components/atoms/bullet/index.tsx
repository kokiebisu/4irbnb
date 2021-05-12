import { AmenityBulletProps } from './bullet-amenity';
import { CharacteristicsBulletProps } from './bullet-characteristics';
import { CheckBulletProps } from './bullet-check';
import { ExperienceBulletProps } from './bullet-experience';
import { HelpBulletProps } from './bullet-help';
import { HostBulletProps } from './bullet-host';
import { OnlineHostBulletProps } from './bullet-onlinehost';
import { PriorityBulletProps } from './bullet-priority';
import { QuestionBulletProps } from './bullet-question';
import { RatingBulletProps } from './bullet-rating';
import { RequiredBulletProps } from './bullet-required';
import { ScenarioBulletProps } from './bullet-scenario';
import { ScoreBulletProps } from './bullet-score';
import { factory } from './utils/factory';

export type BulletVariants =
  | 'characteristic'
  | 'amenity'
  | 'score'
  | 'host'
  | 'know'
  | 'rating'
  | 'bring'
  | 'experience'
  | 'priority'
  | 'help'
  | 'required'
  | 'onlinehost'
  | 'question'
  | 'check'
  | 'scenario';
export interface BulletProps
  extends AmenityBulletProps,
    CharacteristicsBulletProps,
    RatingBulletProps,
    RequiredBulletProps,
    ScenarioBulletProps,
    CheckBulletProps,
    OnlineHostBulletProps,
    QuestionBulletProps,
    ExperienceBulletProps,
    HostBulletProps,
    ScoreBulletProps,
    HelpBulletProps,
    PriorityBulletProps {
  variant: BulletVariants;
}

/**
 * Bundles the bullet components
 * @param {string} extendsTo - Adds custom styyling to the bullet component
 * @param {string} variant - Specify the variant of the bullet
 */
export const Bullet: React.FC<BulletProps> = ({ variant, ...props }) => {
  const variants: {
    [variant: string]: {
      component: JSX.Element;
    };
  } = factory(props);

  return (
    <div data-testid={`${variant}-bullet`}>{variants[variant].component}</div>
  );
};
