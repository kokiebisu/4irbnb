/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PLATFORM } from './constants/platform';
import { generateVariants } from './utils/variants';
import { variants as webVariants } from './web/variants';
import { $BULLET } from './constants/appearance';

export { $BULLET };

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
  platform = PLATFORM.web,
  extendsTo,
  variant = $BULLET.amenity,
  ...props
}) => {
  const variants = generateVariants(PLATFORM[platform], webVariants, props);

  return (
    <div
      data-testid={`${variant}-bullet`}
      className={extendsTo}
      sx={{ ...variants[variant].css }}
    >
      {variants[variant].component}
    </div>
  );
};
