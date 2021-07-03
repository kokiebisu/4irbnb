import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PeriodSegmentTemplate, PeriodSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Become-A-Host',
  component: PeriodSegmentTemplate,
} as Meta;

const SegmentStory: Story<PeriodSegmentTemplateProps> = (args) => (
  <PeriodSegmentTemplate {...args} />
);

export const Period = SegmentStory.bind({});
Period.args = {
  ...mockData,
};
