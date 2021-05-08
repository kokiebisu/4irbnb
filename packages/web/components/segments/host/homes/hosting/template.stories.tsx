import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  HostingSegmentTemplate,
  HostingSegmentTemplateProps,
} from './template';

export default {
  title: 'Templates/Host/Homes',
  component: HostingSegmentTemplate,
} as Meta;

const HostingSegmentTemplateStory: Story<HostingSegmentTemplateProps> = (
  args
) => <HostingSegmentTemplate {...args} />;

export const HostingSegment = HostingSegmentTemplateStory.bind({});
HostingSegment.args = {};
