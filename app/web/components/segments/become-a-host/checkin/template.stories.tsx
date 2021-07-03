import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  CheckInSegmentTemplate,
  CheckInSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Become-A-Host',
  component: CheckInSegmentTemplate,
} as Meta;

const SegmentStory: Story<CheckInSegmentTemplateProps> = (args) => (
  <CheckInSegmentTemplate {...args} />
);

export const CheckIn = SegmentStory.bind({});
CheckIn.args = {
  ...mockData,
};
