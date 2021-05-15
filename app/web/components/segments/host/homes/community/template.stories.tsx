import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  CommunitySegmentTemplate,
  CommunitySegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Host/Homes',
  component: CommunitySegmentTemplate,
} as Meta;

const CommunitySegmentTemplateStory: Story<CommunitySegmentTemplateProps> = (
  args
) => <CommunitySegmentTemplate {...args} />;

export const CommunitySegment = CommunitySegmentTemplateStory.bind({});
CommunitySegment.args = {
  ...mockData,
};
