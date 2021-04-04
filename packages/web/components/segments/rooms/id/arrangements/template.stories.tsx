import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ArrangementsTemplate, ArrangementsTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Rooms/ID',
  component: ArrangementsTemplate,
} as Meta;

const ArrangementsTemplateStory: Story<ArrangementsTemplateProps> = (args) => (
  <ArrangementsTemplate {...args} />
);

export const Arrangements = ArrangementsTemplateStory.bind({});
Arrangements.args = {
  ...mockData,
};
