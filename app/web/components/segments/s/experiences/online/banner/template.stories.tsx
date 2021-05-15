import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BannerSegmentTemplate, BannerSegmentTemplateProps } from './template';

export default {
  title: 'Templates/S/Experiences/Online',
  component: BannerSegmentTemplate,
} as Meta;

const BannerSegmentTemplateStory: Story<BannerSegmentTemplateProps> = (
  args
) => <BannerSegmentTemplate {...args} />;

export const BannerSegment = BannerSegmentTemplateStory.bind({});
BannerSegment.args = {};
