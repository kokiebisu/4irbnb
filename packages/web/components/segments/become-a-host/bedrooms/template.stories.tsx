import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  BedroomsSegmentTemplate,
  BedroomsSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Become-A-Host',
  component: BedroomsSegmentTemplate,
} as Meta;

const SegmentStory: Story<BedroomsSegmentTemplateProps> = (args) => (
  <BedroomsSegmentTemplate {...args} />
);

export const Bedrooms = SegmentStory.bind({});
Bedrooms.args = {
  ...mockData,
};
