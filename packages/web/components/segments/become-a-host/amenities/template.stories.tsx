import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  AmenitiesSegmentTemplate,
  AmenitiesSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: AmenitiesSegmentTemplate,
} as Meta;

const SegmentStory: Story<AmenitiesSegmentTemplateProps> = (args) => (
  <AmenitiesSegmentTemplate {...args} />
);

export const Amenities = SegmentStory.bind({});
Amenities.args = {
  ...mockData,
};
