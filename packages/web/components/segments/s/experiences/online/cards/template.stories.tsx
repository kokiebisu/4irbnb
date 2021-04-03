import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CardsTemplate, CardsTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/S/Experiences/Online',
  component: CardsTemplate,
} as Meta;

const CardsTemplateStory: Story<CardsTemplateProps> = (args) => (
  <CardsTemplate {...args} />
);

export const Cards = CardsTemplateStory.bind({});
Cards.args = {
  ...mockData,
};
