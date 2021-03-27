import { AmenityBullet } from '@bullet/bullet.amenity';
import { BringBullet } from '@bullet/bullet.bring';
import { CharacteristicBullet } from '@bullet/bullet.characteristics';
import { CheckBullet } from '@bullet/bullet.check';
import { ExperienceBullet } from '@bullet/bullet.experience';
import { HelpBullet } from '@bullet/bullet.help';
import { HostBullet } from '@bullet/bullet.host';
import { KnowBullet } from '@bullet/bullet.know';
import { OnlineHostBullet } from '@bullet/bullet.onlinehost';
import { PriorityBullet } from '@bullet/bullet.priority';
import { QuestionBullet } from '@bullet/bullet.question';
import { RatingBullet } from '@bullet/bullet.rating';
import { RequiredBullet } from '@bullet/bullet.required';
import { ScoreBullet } from '@bullet/bullet.score';
import { ScenarioBullet } from '@bullet/bullet.scenario';

export const $Bullet = {
  CHARACTERISTIC: 'characteristic',
  AMENITY: 'amenity',
  SCORE: 'score',
  HOST: 'host',
  KNOW: 'know',
  RATING: 'rating',
  BRING: 'bring',
  EXPERIENCE: 'experience',
  PRIORITY: 'priority',
  HELP: 'help',
  REQUIRED: 'required',
  ONLINEHOST: 'onlinehost',
  QUESTION: 'question',
  CHECK: 'check',
  SCENARIO: 'scenario',
};

export interface BulletProps {
  extendsTo?: string;
  variant: string;
  [property: string]: any;
}

/**
 * Bundles the bullet components
 * @param {string} extendsTo - Adds custom styyling to the bullet component
 * @param {string} variant - Specify the variant of the bullet
 */
export const Bullet: React.FC<BulletProps> = ({
  extendsTo,
  variant,
  ...props
}) => {
  const variants: {
    [property: string]: JSX.Element;
  } = {
    characteristic: <CharacteristicBullet {...props} />,
    amenity: <AmenityBullet {...props} />,
    score: <ScoreBullet {...props} />,
    host: <HostBullet {...props} />,
    know: <KnowBullet {...props} />,
    rating: <RatingBullet {...props} />,
    bring: <BringBullet {...props} />,
    experience: <ExperienceBullet {...props} />,
    priority: <PriorityBullet {...props} />,
    help: <HelpBullet {...props} />,
    required: <RequiredBullet {...props} />,
    onlinehost: <OnlineHostBullet {...props} />,
    question: <QuestionBullet {...props} />,
    check: <CheckBullet {...props} />,
    scenario: <ScenarioBullet {...props} />,
  };

  return (
    <div data-testid={`${variant}-bullet--atom`} className={extendsTo}>
      {variants[variant]}
    </div>
  );
};
