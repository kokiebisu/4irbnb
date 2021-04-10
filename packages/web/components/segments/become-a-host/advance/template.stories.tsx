import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  AdvanceSegmentTemplate,
  AdvanceSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: AdvanceSegmentTemplate,
} as Meta;

const SegmentStory: Story<AdvanceSegmentTemplateProps> = (args) => (
  <AdvanceSegmentTemplate {...args} />
);

export const Advance = SegmentStory.bind({});
Advance.args = {
  ...mockData,
};
