import React from 'react';
import Card from '../card';

import { Text } from '../../../elements/Text';

import cardimg from '../../../assets/img/card.jpg';
import styled from 'styled-components';
import { sizes } from '../../../styles/breakpoints';

export default {
  component: Card,
  title: 'Blocks/Card/WithTitle',
  excludeStories: /.*Data$/,
};

const cardData = {
  children: <Text>Hello</Text>,
  image: cardimg,
  title: 'Your next getaway',
  description: "Unplug or reconnect on a trip that's just a short drive away",
};

const Wrapper = styled.div`
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
`;

export const base = () => (
  <Wrapper>
    <Card {...cardData} />

    <Card {...cardData} />

    <Card {...cardData} />
  </Wrapper>
);
