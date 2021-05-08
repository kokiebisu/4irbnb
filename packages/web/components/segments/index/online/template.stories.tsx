import React from 'react';
import { Story, Meta } from '@storybook/react';
import { OnlineSegmentTemplate, OnlineSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Index',
  component: OnlineSegmentTemplate,
} as Meta;

const OnlineSegmentTemplateStory: Story<OnlineSegmentTemplateProps> = (
  args
) => <OnlineSegmentTemplate {...args} />;

export const OnlineSegment = OnlineSegmentTemplateStory.bind({});
OnlineSegment.args = {
  ...mockData,
};
