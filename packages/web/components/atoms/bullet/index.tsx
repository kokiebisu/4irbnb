import { factory } from './utils/factory';

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
  variant: string;
  [property: string]: any;
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
