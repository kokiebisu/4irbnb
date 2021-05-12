import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  PreviewSegmentTemplate,
  PreviewSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Experiences/ID',
  component: PreviewSegmentTemplate,
} as Meta;

const PreviewSegmentTemplateStory: Story<PreviewSegmentTemplateProps> = (
  args
) => <PreviewSegmentTemplate {...args} />;

export const PreviewSegment = PreviewSegmentTemplateStory.bind({});
PreviewSegment.args = {
  ...mockData,
};
