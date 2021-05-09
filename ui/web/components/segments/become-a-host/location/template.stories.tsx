import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  LocationSegmentTemplate,
  LocationSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Become-A-Host',
  component: LocationSegmentTemplate,
} as Meta;

const SegmentStory: Story<LocationSegmentTemplateProps> = (args) => (
  <LocationSegmentTemplate {...args} />
);

export const Location = SegmentStory.bind({});
Location.args = {
  ...mockData,
};
