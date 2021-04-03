import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DestinationsTemplate, DestinationsTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Index',
  component: DestinationsTemplate,
} as Meta;

const TemplateStory: Story<DestinationsTemplateProps> = (args) => (
  <DestinationsTemplate {...args} />
);

export const Destinations = TemplateStory.bind({});
Destinations.args = {
  ...mockData,
};
