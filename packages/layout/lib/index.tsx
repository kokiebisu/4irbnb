/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

import { generateVariants } from './utils/variants';
import { webVariants } from './web/variants';

import { $LAYOUT } from './constant/appearance';
import { PLATFORM } from './constant/platform';

export { $LAYOUT };

export interface LayoutProps {
  extendsTo?: string;
  variant: string;
  [property: string]: any;
}

/**
 * Bundles the Layout components
 * @param {string} extendsTo - Customize the component wrapper
 * @param {string} variant - Specify the variant of the component
 */
export const Layout: React.FC<LayoutProps> = ({
  platform = PLATFORM.web,
  extendsTo,
  variant = $LAYOUT.input,
  ...props
}) => {
  const variants = generateVariants(platform, webVariants, props);

  return (
    <div
      sx={{ ...variants[variant].css }}
      className={extendsTo}
      data-testid={`${variant}-layout`}
    >
      {variants[variant].component}
    </div>
  );
};
