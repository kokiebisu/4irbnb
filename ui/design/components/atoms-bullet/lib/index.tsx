/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

import { amenity } from './web/bullet.amenity';
import { bring } from './web/bullet.bring';
import { characteristic } from './web/bullet.characteristics';
import { CheckBullet } from './web/bullet.check';
import { experience } from './web/bullet.experience';
import { HelpBullet } from './web/bullet.help';
import { host } from './web/bullet.host';
import { know } from './web/bullet.know';
import { OnlineHostBullet } from './web/bullet.onlinehost';
import { priority } from './web/bullet.priority';
import { QuestionBullet } from './web/bullet.question';
import { rating } from './web/bullet.rating';
import { RequiredBullet } from './web/bullet.required';
import { score } from './web/bullet.score';
import { ScenarioBullet } from './web/bullet.scenario';

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
  extendsTo?: any;
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
    [property: string]: {
      component: JSX.Element;
      css: any;
    };
  } = {
    ...characteristic(props),
    ...amenity(props),
    ...score(props),
    ...host(props),
    ...know(props),
    ...rating(props),
    ...bring(props),
    ...experience(props),
    ...priority(props),
    [$Bullet.HELP]: {
      component: <HelpBullet {...props} />,
      css: {},
    },
    [$Bullet.REQUIRED]: {
      component: <RequiredBullet {...props} />,
      css: {},
    },
    [$Bullet.ONLINEHOST]: {
      component: <OnlineHostBullet {...props} />,
      css: {},
    },
    [$Bullet.QUESTION]: {
      component: <QuestionBullet {...props} />,
      css: {},
    },
    [$Bullet.CHECK]: {
      component: <CheckBullet {...props} />,
      css: {},
    },
    [$Bullet.SCENARIO]: {
      component: <ScenarioBullet {...props} />,
      css: {},
    },
  };

  return (
    <div data-testid={`${variant}-bullet`} className={extendsTo}>
      {variants[variant]}
    </div>
  );
};
