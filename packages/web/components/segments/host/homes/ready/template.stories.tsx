import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ReadySegmentTemplate, ReadySegmentTemplateProps } from './template';

export default {
  title: 'Templates/Host/Homes',
  component: ReadySegmentTemplate,
} as Meta;

const ReadySegmentTemplateStory: Story<ReadySegmentTemplateProps> = (args) => (
  <ReadySegmentTemplate {...args} />
);

export const ReadySegment = ReadySegmentTemplateStory.bind({});
ReadySegment.args = {};
