/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PLATFORM } from './constant/platform';
import { webVariants } from './web/variants';
import { generateVariants } from './utils/variants';
import { $HEADER } from './constant/appearance';

export { $HEADER };

export interface HeaderProps {
  extendsTo?: any;
  variant: string;
  [property: string]: any;
}

/**
 * Bundles the header components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} variant - Specifies the type of header component
 */
export const Header: React.FC<HeaderProps> = ({
  platform = PLATFORM.web,
  variant,
  extendsTo,
  ...props
}) => {
  const variants = generateVariants(platform, webVariants, props);
  return (
    <div
      sx={{ ...variants[variant].css }}
      className={extendsTo}
      data-testid={`${variant}-header`}
    >
      {variants[variant].component}
    </div>
  );
};
