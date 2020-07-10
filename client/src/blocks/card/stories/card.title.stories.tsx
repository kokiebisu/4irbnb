import React from 'react';
import Card from '../card

import { Text } from '../../../elements/Text';

export default {
  component: Card,
  title: 'Blocks/Card/WithTitle',
  excludeStories: /.*Data$/,
};

const cardData = {
  children: <Text>Hello</Text>,
};

export const base = () => <Card {...cardData} />;
