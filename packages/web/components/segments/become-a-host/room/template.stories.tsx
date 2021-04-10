import React from 'react';
import { Story, Meta } from '@storybook/react';
import { RoomSegmentTemplate, RoomSegmentTemplateProps } from './template';
// import * as mockData from './mock';

export default {
  title: 'Templates/Become-A-Host',
  component: RoomSegmentTemplate,
} as Meta;

const SegmentStory: Story<RoomSegmentTemplateProps> = (args) => (
  <RoomSegmentTemplate {...args} />
);

export const Room = SegmentStory.bind({});
Room.args = {
  // ...mockData,
};
