/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, ThemeProvider } from 'theme-ui';
import { $INPUT } from './constant/appearance';
import { generateVariants } from './utils/variants';
import { PLATFORM } from './constant/platform';
import { theme } from '@nextbnb/theme';

export { $INPUT };

export interface InputProps {
  extendsTo?: string;
  variant?: string;
  spread?: boolean;
  [property: string]: any;
}

/**
 * Bundles the input components
 * @param {string} variant - Specifies the variant of input component
 */
export const Input: React.FC<InputProps> = ({
  platform = 'web',
  variant = $INPUT.address,
  spread,
  ...props
}) => {
  const variants = generateVariants(PLATFORM[platform], props);

  return (
    <ThemeProvider theme={theme}>
      <div
        css={{ ...(spread && { width: '100%' }) }}
        sx={{ ...variants[variant].css }}
        data-testid={`${variant}-input`}
      >
        {variants[variant].component}
      </div>
    </ThemeProvider>
  );
};
