import { AmenityBulletProps } from './bullet-amenity';
import { BringBulletProps } from './bullet-bring';
import { CharacteristicsBulletProps } from './bullet-characteristics';
import { CheckBulletProps } from './bullet-check';
import { ExperienceBulletProps } from './bullet-experience';
import { HelpBulletProps } from './bullet-help';
import { HostBulletProps } from './bullet-host';
import { KnowBulletProps } from './bullet-know';
import { OnlineHostBulletProps } from './bullet-onlinehost';
import { PriorityBulletProps } from './bullet-priority';
import { QuestionBulletProps } from './bullet-question';
import { RatingBulletProps } from './bullet-rating';
import { RequiredBulletProps } from './bullet-required';
import { ScenarioBulletProps } from './bullet-scenario';
import { ScoreBulletProps } from './bullet-score';
import { factory } from './utils/factory';

export type BulletProps =
  | ({ variant: 'characteristics' } & CharacteristicsBulletProps)
  | ({ variant: 'bring' } & BringBulletProps)
  | ({ variant: 'amenity' } & AmenityBulletProps)
  | ({ variant: 'check' } & CheckBulletProps)
  | ({ variant: 'score' } & ScoreBulletProps)
  | ({ variant: 'host' } & HostBulletProps)
  | ({ variant: 'know' } & KnowBulletProps)
  | ({ variant: 'rating' } & RatingBulletProps)
  | ({ variant: 'experience' } & ExperienceBulletProps)
  | ({ variant: 'priority' } & PriorityBulletProps)
  | ({ variant: 'help' } & HelpBulletProps)
  | ({ variant: 'required' } & RequiredBulletProps)
  | ({ variant: 'onlinehost' } & OnlineHostBulletProps)
  | ({ variant: 'question' } & QuestionBulletProps)
  | ({ variant: 'scenario' } & ScenarioBulletProps);

/**
 * Bundles the bullet components
 * @param {string} variant - Specify the variant of the bullet
 */
export const Bullet: React.FC<BulletProps> = (props) => {
  return factory(props) as JSX.Element;
};
