import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  ArrangementsSegmentTemplate,
  ArrangementsSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Rooms/ID',
  component: ArrangementsSegmentTemplate,
} as Meta;

const ArrangementsSegmentTemplateStory: Story<ArrangementsSegmentTemplateProps> = (
  args
) => <ArrangementsSegmentTemplate {...args} />;

export const ArrangementsSegment = ArrangementsSegmentTemplateStory.bind({});
ArrangementsSegment.args = {
  ...mockData,
};
