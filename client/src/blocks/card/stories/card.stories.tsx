import React from 'react';
import Card from '../card';

import { Text } from '../../../elements/Text';

// imgs
import card1 from '../../../assets/img/card1.jpg';
import card2 from '../../../assets/img/card2.jpg';
import card3 from '../../../assets/img/card3.jpg';

import styled, { css } from 'styled-components';
import { sizes } from '../../../styles/breakpoints';
import { Box } from '../../../elements/Box';

export default {
  component: Card,
  title: 'Blocks/Card/WithTitle',
  excludeStories: /.*Data$/,
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

export const Single = () => (
  <Box>
    <Card {...cardData1} />
  </Box>
);

export const Multiple = () => (
  <Box styles={extend.multiple}>
    <Card {...cardData1} />
    <Card {...cardData2} />
    <Card {...cardData3} />
  </Box>
);

const extend = {
  single: css``,
  multiple: css`
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
