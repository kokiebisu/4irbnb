/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PLATFORM } from './constant/platform';
import { $PROTOTYPE } from './constant/appearance';
import { generateVariants } from './utils/variants';
import { webVariants } from './web/variants';

export { $PROTOTYPE };

export interface PrototypeProps {
  variant?: string;
  place?: string;
  stayType?: string | string[];
  characteristics?: string;
  [property: string]: any;
}

export const Prototype: React.FC<PrototypeProps> = ({
  platform = PLATFORM.web,
  variant = $PROTOTYPE.language,
  city = 'Paris',
  stayType = 'house',
  characteristics,
  ...props
}) => {
  const variants = generateVariants(platform, webVariants, props);
  return (
    <div
      sx={{ ...variants[variant].css }}
      data-testid={`${variant}-globe-template`}
    >
      {variants[variant].component}
    </div>
  );
};
