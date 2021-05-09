import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  AvailableSegmentTemplate,
  AvailableSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: AvailableSegmentTemplate,
} as Meta;

const AvailableSegmentTemplateStory: Story<AvailableSegmentTemplateProps> = (
  args
) => <AvailableSegmentTemplate {...args} />;

export const AvailableSegment = AvailableSegmentTemplateStory.bind({});
AvailableSegment.args = {
  ...mockData,
};
