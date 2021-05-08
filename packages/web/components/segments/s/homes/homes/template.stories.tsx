import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HomesSegmentTemplate, HomesSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/S/HomesSegment',
  component: HomesSegmentTemplate,
} as Meta;

const HomesSegmentTemplateStory: Story<HomesSegmentTemplateProps> = (args) => (
  <HomesSegmentTemplate {...args} />
);

export const HomesSegment = HomesSegmentTemplateStory.bind({});
HomesSegment.args = {
  ...mockData,
};
