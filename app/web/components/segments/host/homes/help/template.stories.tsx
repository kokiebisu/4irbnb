import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HelpSegmentTemplate, HelpSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Host/Homes',
  component: HelpSegmentTemplate,
} as Meta;

const HelpSegmentTemplateStory: Story<HelpSegmentTemplateProps> = (args) => (
  <HelpSegmentTemplate {...args} />
);

export const HelpSegment = HelpSegmentTemplateStory.bind({});
HelpSegment.args = {
  ...mockData,
};
