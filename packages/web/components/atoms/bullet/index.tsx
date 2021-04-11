import { AmenityBulletProps } from './bullet.amenity';
import { CharacteristicBulletProps } from './bullet.characteristics';
import { RatingBulletProps } from './bullet.rating';
import { factory } from './utils/factory';

enum Variant {
  'characteristic',
  'amenity',
  'score',
  'host',
  'know',
  'rating',
  'bring',
  'experience',
  'priority',
  'help',
  'required',
  'onlinehost',
  'question',
  'check',
  'scenario',
}

export interface BulletVariantProps {
  variant: Variant;
}

export interface BulletProps
  extends BulletVariantProps,
    AmenityBulletProps,
    CharacteristicBulletProps,
    RatingBulletProps {
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
