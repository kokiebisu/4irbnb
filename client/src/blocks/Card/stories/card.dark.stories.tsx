import React from 'react';
import { css, ThemeProvider } from 'styled-components';

// block
import Card from '../card';

// element
import { Box } from '../../../elements/Box';

// img
import cardsm from '../../../assets/img/darkcard-sm.png';
import cardmd from '../../../assets/img/darkcard-md.png';
import cardlg from '../../../assets/img/darkcard-lg.png';

// breakpoint
import { sizes } from '../../../styles/breakpoints';

export default {
  component: Card,
  title: 'Blocks/Card/Dark',
  excludeStories: /.*Data$/,
};

// data

const cardDataSmall = {
  image: cardsm,
  subtitle: 'Fruits de mer with Michelin chef Marc Favier',
  size: 'sm',
};

const cardDataMedium = {
  image: cardmd,
  subtitle: 'Fruits de mer with Michelin chef Marc Favier',
  size: 'sm',
};

const cardDataLarge = {
  image: cardlg,
  subtitle: 'Learn favorite summer recipes with celebrated chef Roze Traore',
  size: 'lg',
};

export const Small = () => {
  const extend = {
    box: css`
      width: 100%;
      max-width: 250px;
    `,
  };
  return (
    <ThemeProvider theme={{ mode: 'dark' }}>
      <Box styles={extend.box}>
        <Card {...cardDataSmall} />
      </Box>
    </ThemeProvider>
  );
};

export const Medium = () => {
  const extend = {
    box: css`
      width: 100%;
      max-width: 400px;
    `,
  };
  return (
    <ThemeProvider theme={{ mode: 'dark' }}>
      <Box styles={extend.box}>
        <Card {...cardDataMedium} />
      </Box>
    </ThemeProvider>
  );
};

export const Large = () => {
  const extend = {
    box: css`
      width: 100%;
      max-width: 550px;
    `,
  };
  return (
    <ThemeProvider theme={{ mode: 'dark' }}>
      <Box styles={extend.box}>
        <Card {...cardDataLarge} />
      </Box>
    </ThemeProvider>
  );
};
