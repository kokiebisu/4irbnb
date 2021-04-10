import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  ScenariosSegmentTemplate,
  ScenariosSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: ScenariosSegmentTemplate,
} as Meta;

const SegmentStory: Story<ScenariosSegmentTemplateProps> = (args) => (
  <ScenariosSegmentTemplate {...args} />
);

export const Scenarios = SegmentStory.bind({});
Scenarios.args = {
  ...mockData,
};
