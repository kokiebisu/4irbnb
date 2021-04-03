import React from 'react';
import { Story, Meta } from '@storybook/react';
import { NearbyTemplate, NearbyTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Index',
  component: NearbyTemplate,
} as Meta;

const TemplateStory: Story<NearbyTemplateProps> = (args) => (
  <NearbyTemplate {...args} />
);

export const Nearby = TemplateStory.bind({});
Nearby.args = {
  ...mockData,
};
