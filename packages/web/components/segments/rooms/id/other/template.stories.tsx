import React from 'react';
import { Story, Meta } from '@storybook/react';
import { OtherSegmentTemplate, OtherSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Rooms/ID',
  component: OtherSegmentTemplate,
} as Meta;

const OtherSegmentTemplateStory: Story<OtherSegmentTemplateProps> = (args) => (
  <OtherSegmentTemplate {...args} />
);

export const OtherSegment = OtherSegmentTemplateStory.bind({});
OtherSegment.args = {
  ...mockData,
};
