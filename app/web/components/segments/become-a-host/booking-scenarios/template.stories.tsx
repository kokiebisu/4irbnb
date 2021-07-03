import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  BookingScenariosSegmentTemplate,
  BookingScenariosSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Become-A-Host',
  component: BookingScenariosSegmentTemplate,
} as Meta;

const SegmentStory: Story<BookingScenariosSegmentTemplateProps> = (args) => (
  <BookingScenariosSegmentTemplate {...args} />
);

export const Scenarios = SegmentStory.bind({});
Scenarios.args = {
  ...mockData,
};
