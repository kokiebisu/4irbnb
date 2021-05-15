import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MoreSegmentTemplate, MoreSegmentTemplateProps } from './template';

export default {
  title: 'Templates/D/OnlineHosts',
  component: MoreSegmentTemplate,
} as Meta;

const SegmentTemplateStory: Story<MoreSegmentTemplateProps> = (args) => (
  <MoreSegmentTemplate {...args} />
);

export const More = SegmentTemplateStory.bind({});
More.args = {};
