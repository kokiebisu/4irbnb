import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  DescriptionSegmentTemplate,
  DescriptionSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: DescriptionSegmentTemplate,
} as Meta;

const SegmentStory: Story<DescriptionSegmentTemplateProps> = (args) => (
  <DescriptionSegmentTemplate {...args} />
);

export const Description = SegmentStory.bind({});
Description.args = {
  ...mockData,
};
