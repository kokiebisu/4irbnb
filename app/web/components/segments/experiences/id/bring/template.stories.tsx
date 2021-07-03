import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BringSegmentTemplate, BringSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Experiences/ID',
  component: BringSegmentTemplate,
} as Meta;

const BringSegmentTemplateStory: Story<BringSegmentTemplateProps> = (args) => (
  <BringSegmentTemplate {...args} />
);

export const BringSegment = BringSegmentTemplateStory.bind({});
BringSegment.args = {
  ...mockData,
};
