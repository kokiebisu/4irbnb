import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  GetStartedSegmentTemplate,
  GetStartedSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: GetStartedSegmentTemplate,
} as Meta;

const SegmentStory: Story<GetStartedSegmentTemplateProps> = (args) => (
  <GetStartedSegmentTemplate {...args} />
);

export const GetStarted = SegmentStory.bind({});
GetStarted.args = {
  ...mockData,
};
