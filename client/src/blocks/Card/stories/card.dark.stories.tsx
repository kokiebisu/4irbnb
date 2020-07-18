import React from 'react';
import { css, ThemeProvider } from 'styled-components';

// block
import Card from '../card';

// element
import { Box } from '../../../elements/Box';

// img
import card1 from '../../../assets/img/card1.jpg';
import card2 from '../../../assets/img/card2.jpg';
import card3 from '../../../assets/img/card3.jpg';

// breakpoint
import { sizes } from '../../../styles/breakpoints';

export default {
  component: Card,
  title: 'Blocks/Card/Dark',
  excludeStories: /.*Data$/,
};

// data

const cardDataSmall = {
  image: card1,
  subtitle: 'Fruits de mer with Michelin chef Marc Favier',
  size: 'sm',
};

const cardDataLarge = {
  image: card1,
  subtitle: 'Learn favorite summer recipes with celebrated chef Roze Traore',
  size: 'lg',
};

export const Small = () => {
  const extend = {
    box: css`
      width: 100%;
      max-width: 350px;
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
