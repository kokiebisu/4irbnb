import React from 'react';
import { css } from 'styled-components';

// molecules
import Card from 'molecules/Card';

// atoms
import { Box } from 'atoms';

// img
import card1 from 'assets/img/card1.jpg';
import card2 from 'assets/img/card2.jpg';
import card3 from 'assets/img/card3.jpg';

// breakpoint
import { sizes } from 'styles/breakpoints';

export default {
  title: 'Design Systems|Molecules/Card/Light',
  parameters: {
    component: Card,
    componentSubtitle: 'Displays a card under a light background',
  },
  excludeStories: /.*Data$/,
};

// data
const cardDataWithoutTitle = {
  image: card1,
  description: 'Unique activities we can do together, led by a world of hosts',
};

const cardData1 = {
  image: card1,
  title: 'Online experiences',
  description: 'Unique activities we can do together, led by a world of hosts',
};

const cardData2 = {
  image: card2,
  title: 'Your next getaway',
  description: "Unplug or reconnect on a trip that's just a short drive away",
};

const cardData3 = {
  image: card3,
  title: 'Entire homes',
  description: 'Comfortable private places, with room for friends or family',
};

export const SingleWithoutTitle = () => {
  const extend = {
    box: css`
      width: 100%;
      max-width: 350px;
    `,
  };
  return (
    <Box styles={extend.box}>
      <Card {...cardDataWithoutTitle} />
    </Box>
  );
};

export const SingleWithTitle = () => {
  const extend = {
    box: css`
      width: 100%;
      max-width: 350px;
    `,
  };
  return (
    <Box styles={extend.box}>
      <Card {...cardData1} />
    </Box>
  );
};

export const Multiple = () => {
  const extend = {
    box: css`
      width: 100%;
      height: 100%;
      padding: 0 20px;
      display: flex;

      @media ${sizes.sm} {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 15px;
      }
    `,
  };
  return (
    <Box styles={extend.box}>
      <Card {...cardData1} />
      <Card {...cardData2} />
      <Card {...cardData3} />
    </Box>
  );
};
