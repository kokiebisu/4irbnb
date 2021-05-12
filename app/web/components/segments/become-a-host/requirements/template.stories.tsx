import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  RequirementsSegmentTemplate,
  RequirementsSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Become-A-Host',
  component: RequirementsSegmentTemplate,
} as Meta;

const SegmentStory: Story<RequirementsSegmentTemplateProps> = (args) => (
  <RequirementsSegmentTemplate {...args} />
);

export const Requirements = SegmentStory.bind({});
Requirements.args = {
  ...mockData,
};
