import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  SharingSegmentTemplate,
  SharingSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: SharingSegmentTemplate,
} as Meta;

const SegmentStory: Story<SharingSegmentTemplateProps> = (args) => (
  <SharingSegmentTemplate {...args} />
);

export const Sharing = SegmentStory.bind({});
Sharing.args = {
  ...mockData,
};
