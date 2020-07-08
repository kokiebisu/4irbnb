import React from 'react';
import TitleCard from '../card.title';

import { Text } from '../../../elements/Text';

export default {
  component: TitleCard,
  title: 'Blocks/Card/WithTitle',
  excludeStories: /.*Data$/,
};

const cardData = {
  children: <Text>Hello</Text>,
};

export const base = () => <TitleCard {...cardData} />;
