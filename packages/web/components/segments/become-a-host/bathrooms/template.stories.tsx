import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  BathroomsSegmentTemplate,
  BathroomsSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: BathroomsSegmentTemplate,
} as Meta;

const SegmentStory: Story<BathroomsSegmentTemplateProps> = (args) => (
  <BathroomsSegmentTemplate {...args} />
);

export const Bathrooms = SegmentStory.bind({});
Bathrooms.args = {
  ...mockData,
};
