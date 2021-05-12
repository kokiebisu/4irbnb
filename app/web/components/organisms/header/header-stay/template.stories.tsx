import React from 'react';
import { Story, Meta } from '@storybook/react';
import { StayHeaderTemplate, StayHeaderTemplateProps } from './template';

export default {
  title: 'Organisms/Header',
  component: StayHeaderTemplate,
} as Meta;

const HeaderStory: Story<StayHeaderTemplateProps> = (args) => (
  <StayHeaderTemplate {...args} />
);

export const Stay = HeaderStory.bind({});
Stay.args = {};
