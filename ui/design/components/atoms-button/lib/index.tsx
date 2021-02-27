/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import '@nextbnb/design/assets/styles/global.css';
import React from 'react';

import { motion } from 'framer-motion';
import { ThemeProvider } from 'theme-ui';
import { theme } from '@nextbnb/theme';

import { auth } from './web/button.auth';
import { back } from './web/button.back';
import { banner } from './web/button.banner';
import { bar } from './web/button.bar';
import { border } from './web/button.border';
import { calendar } from './web/button.calendar';
import { closed } from './web/button.closed';
import { destination } from './web/button.destination';
import { expand } from './web/button.expand';
import { currency } from './web/button.currency';
import { video } from './web/button.video';
import { underline } from './web/button.underline';
import { transparent } from './web/button.transparent';
import { searchbar } from './web/button.searchbar';
import { search } from './web/button.search';
import { report } from './web/button.report';
import { privacy } from './web/button.privacy';
import { primary } from './web/button.primary';
import { paginate } from './web/button.paginate';
import { option } from './web/button.option';
import { nearby } from './web/button.nearby';
import { modal } from './web/button.modal';
import { menu } from './web/button.menu';
import { logo } from './web/button.logo';
import { location } from './web/button.location';
import { link } from './web/button.link';
import { globe } from './web/button.globe';
import { filter } from './web/button.filter';

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

  const variants: {
    [variant: string]: { component: JSX.Element; css: any };
  } = {
    ...auth(props),
    ...back(props),
    ...banner(props),
    ...bar(props),
    ...border(props),
    ...calendar(props),
    ...closed(props),
    ...currency(props),
    ...destination(props),
    ...expand(props),
    ...filter(props),
    ...globe(props),
    ...link(props),
    ...location(props),
    ...logo(props),
    ...menu(props),
    ...modal(props),
    ...nearby(props),
    ...option(props),
    ...paginate(props),
    ...primary(props),
    ...privacy(props),
    ...report(props),
    ...search(props),
    ...searchbar(props),
    ...transparent(props),
    ...underline(props),
    ...video(props),
  };

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
