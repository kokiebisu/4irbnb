import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CardsTemplate, CardsTemplateProps } from './template';

export default {
  title: 'Templates/Index',
  component: CardsTemplate,
} as Meta;

const TemplateStory: Story<CardsTemplateProps> = (args) => (
  <CardsTemplate {...args} />
);

export const Cards = TemplateStory.bind({});
Cards.args = {};
