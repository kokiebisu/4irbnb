import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  AmenitiesSegmentTemplate,
  AmenitiesSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Rooms/ID',
  component: AmenitiesSegmentTemplate,
} as Meta;

const AmenitiesSegmentTemplateStory: Story<AmenitiesSegmentTemplateProps> = (
  args
) => <AmenitiesSegmentTemplate {...args} />;

export const AmenitiesSegment = AmenitiesSegmentTemplateStory.bind({});
AmenitiesSegment.args = {
  ...mockData,
};
