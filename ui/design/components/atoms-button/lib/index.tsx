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

export interface ButtonProps {
  extendsTo?: any;
  onClick: () => void;
  variant?: string;
  children?: any;
  shadow?: boolean;
  [property: string]: any;
}

export const $Button = {
  AUTH: 'auth',
  BACK: 'back',
  BANNER: 'banner',
  BAR: 'bar',
  BORDER: 'border',
  CALENDAR: 'calendar',
  CLOSED: 'closed',
  CURRENCY: 'currency',
  DESTINATION: 'destination',
  EXPAND: 'expand',
  FILTER: 'filter',
  GLOBE: 'globe',
  LINK: 'link',
  LOCATION: 'location',
  LOGO: 'logo',
  MENU: 'menu',
  MODAL: 'modal',
  NEARBY: 'nearby',
  OPTION: 'option',
  PAGINATE: 'paginate',
  PRIMARY: 'primary',
  PRIVACY: 'privacy',
  REPORT: 'report',
  SEARCH: 'search',
  SEARCHBAR: 'searchbar',
  TRANSPARENT: 'transparent',
  UNDERLINE: 'underline',
  VIDEO: 'video',
};

export const Button: React.FC<ButtonProps> = ({
  platform = 'web',
  extendsTo = {},
  variant = $Button.AUTH,
  onClick,
  block,
  animate,
  children,
  shadow,
  ...props
}) => {
  const { disable } = props;

  const variants = generateVariants(
    PLATFORM[platform],
    webVariants,
    null,
    null,
    props
  );

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
