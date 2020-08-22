import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import styled, { css, ThemeProvider } from 'styled-components';
import Card from 'molecules/Card';
import { Box } from 'atoms';
import { CardProps } from 'molecules/Card';

import cardimg from 'assets/img/darkcard-sm.png';

export default {
  title: 'Design Systems/Card/Dark',
  component: Card,
};

// data
const cardData = {
  image: cardimg,
  subtitle: 'Fruits de mer with Michelin chef Marc Favier',
};

// const cardDataMedium = {
//   image: cardmd,
//   subtitle: 'Fruits de mer with Michelin chef Marc Favier',
//   size: 'sm',
// };

// const cardDataLarge = {
//   image: cardlg,
//   subtitle: 'Learn favorite summer recipes with celebrated chef Roze Traore',
//   size: 'lg',
// };

interface CardTemplateProps {
  styles?: any;
  image: string;
  size: string;
}

const DarkCardTemplate: Story<CardTemplateProps> = ({ styles, ...args }) => (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <Box styles={styles}>
      <Card {...args} />
    </Box>
  </ThemeProvider>
);

export const small = DarkCardTemplate.bind({});
small.args = {
  styles: css`
    width: 100%;
    max-width: 200px;
    height: 200px;
  `,
  size: 'sm',
  ...cardData,
};

export const medium = DarkCardTemplate.bind({});
medium.args = {
  styles: css`
    width: 100%;
    max-width: 400px;
    height: 200px;
  `,
  size: 'md',
  ...cardData,
};

export const large = DarkCardTemplate.bind({});
large.args = {
  styles: css`
    width: 100%;
    max-width: 400px;
    height: 400px;
  `,
  size: 'lg',
  ...cardData,
};
