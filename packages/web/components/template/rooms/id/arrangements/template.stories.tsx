import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ArrangementsTemplate, ArrangementsTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Index',
  component: ArrangementsTemplate,
} as Meta;

const TemplateStory: Story<ArrangementsTemplateProps> = (args) => (
  <ArrangementsTemplate {...args} />
);

export const Arrangements = TemplateStory.bind({});
Arrangements.args = {
  ...mockData,
};
