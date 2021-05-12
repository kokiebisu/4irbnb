import React from 'react';
import { Story, Meta } from '@storybook/react';
import { WorthSegmentTemplate, WorthSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Index',
  component: WorthSegmentTemplate,
} as Meta;

const WorthSegmentTemplateStory: Story<WorthSegmentTemplateProps> = (args) => (
  <WorthSegmentTemplate {...args} />
);

export const WorthSegment = WorthSegmentTemplateStory.bind({});
WorthSegment.args = {
  ...mockData,
};
