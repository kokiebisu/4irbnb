/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import '@nextbnb/design/assets/styles/global.css';
import React from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from 'theme-ui';
import { theme } from '@nextbnb/theme';
import { variants as webVariants } from './web/variants';
import { generateVariants } from './utils/variants';
import { PLATFORM } from './constants/platform';

import { $BUTTON } from './constants/appearance';

export { $BUTTON };

export interface ButtonProps {
  extendsTo?: any;
  onClick: () => void;
  variant?: string;
  children?: any;
  shadow?: boolean;
  [property: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  platform = 'web',
  extendsTo = {},
  variant = $BUTTON.auth,
  onClick,
  block,
  animate,
  children,
  shadow,
  ...props
}) => {
  const { disable } = props;

  const variants = generateVariants(PLATFORM[platform], webVariants, props);

  return (
    <ThemeProvider theme={theme}>
      <motion.button
        transition={{ duration: 0.1, ease: 'easeInOut' }}
        whileTap={{ scale: disable || !animate ? 1 : 0.995 }}
        whileHover={{ scale: disable || !animate ? 1 : 1.005 }}
        data-testid={`${variant}-button`}
        sx={{
          ...(block
            ? { display: 'block', width: '100%' }
            : { display: 'inline-block' }),
          ...variants[variant].css,
        }}
        onClick={disable ? undefined : onClick}
        disabled={disable}
        style={{ cursor: disable ? 'default' : 'pointer', ...extendsTo }}
      >
        {variant ? variants[variant].component : children}
      </motion.button>
    </ThemeProvider>
  );
};
