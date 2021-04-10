import React from 'react';
import { Story, Meta } from '@storybook/react';
import { RulesSegmentTemplate, RulesSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: RulesSegmentTemplate,
} as Meta;

const SegmentStory: Story<RulesSegmentTemplateProps> = (args) => (
  <RulesSegmentTemplate {...args} />
);

export const Rules = SegmentStory.bind({});
Rules.args = {
  ...mockData,
};
