import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  PrioritySegmentTemplate,
  PrioritySegmentTemplateProps,
} from './template';

export default {
  title: 'Templates/Host/Homes',
  component: PrioritySegmentTemplate,
} as Meta;

const PrioritySegmentTemplateStory: Story<PrioritySegmentTemplateProps> = (
  args
) => <PrioritySegmentTemplate {...args} />;

export const PrioritySegment = PrioritySegmentTemplateStory.bind({});
PrioritySegment.args = {};
