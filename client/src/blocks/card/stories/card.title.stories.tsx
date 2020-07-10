import React from 'react';
import Card from '../card';

import { Text } from '../../../elements/Text';

import cardimg from '../../../assets/img/card.jpg';

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

export const base = () => <Card {...cardData} />;
