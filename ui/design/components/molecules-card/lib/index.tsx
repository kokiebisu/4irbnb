/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { variants as webVariants } from './web/variants';
import { $CARD } from './constant/appearance';
import { generateVariants } from './utils/variants';
import { Platform } from './constant/platform';

export { $CARD };

export interface CardProps {
  extendsTo?: any;
  variant?: string;
  to?: string;
  navigate?: any;
  [property: string]: any;
}

/**
 * Bundles the card components
 * @param {string} extendsTo - Adds custom styling to the specified component
 * @param {string} variant - Specifies the variant of card component
 * @param {string} to - Redirects to the path when clicked
 */
export const Card: React.FC<CardProps> = ({
  platform = Platform.web,
  extendsTo,
  variant = $CARD.category,
  to,
  navigate,
  ...props
}) => {
  const variants = generateVariants(Platform[platform], webVariants, props);

  if (to) {
    return (
      <div
        css={{
          cursor: 'pointer',
          textAlign: 'left',
          display: 'block',
          heigth: '100%',
          width: '100%',
          ...extendsTo,
        }}
        data-testid={`${variant}-card--molecule`}
        onClick={() => navigate(to)}
      >
        {variant && variants[variant].component}
      </div>
    );
  }

  return (
    <div
      sx={{ ...variants[variant].css }}
      data-testid={`${variant}-card`}
      className={extendsTo}
    >
      {variant && variants[variant].component}
    </div>
  );
};
