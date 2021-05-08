import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AllSegmentTemplate, AllSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Host/Homes',
  component: AllSegmentTemplate,
} as Meta;

const AllSegmentTemplateStory: Story<AllSegmentTemplateProps> = (args) => (
  <AllSegmentTemplate {...args} />
);

export const All = AllSegmentTemplateStory.bind({});
All.args = {
  ...mockData,
};
