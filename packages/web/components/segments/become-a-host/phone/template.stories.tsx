import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PhoneSegmentTemplate, PhoneSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: PhoneSegmentTemplate,
} as Meta;

const SegmentStory: Story<PhoneSegmentTemplateProps> = (args) => (
  <PhoneSegmentTemplate {...args} />
);

export const Phone = SegmentStory.bind({});
Phone.args = {
  ...mockData,
};
