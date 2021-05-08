import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HostSegmentTemplate, HostSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Experiences/ID',
  component: HostSegmentTemplate,
} as Meta;

const HostSegmentTemplateStory: Story<HostSegmentTemplateProps> = (args) => (
  <HostSegmentTemplate {...args} />
);

export const HostSegment = HostSegmentTemplateStory.bind({});
HostSegment.args = {
  ...mockData,
};
