/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PLATFORM } from './constant/platform';
import { generateVariants } from './utils/variants';
import { webVariants } from './web/variants';
import { $PANEL } from './constant/appearance';

export { $PANEL };

export interface PanelProps {
  variant: string;
  extendsTo?: string;
  [property: string]: any;
}

export const Panel: React.FC<PanelProps> = ({
  platform = PLATFORM.web,
  variant,
  extendsTo,
  ...props
}) => {
  const variants = generateVariants(PLATFORM[platform], webVariants, props);
  return (
    <div sx={{ ...variants[variant].css }} data-testid={`${variant}-panel`}>
      {variants[variant].component}
    </div>
  );
};
