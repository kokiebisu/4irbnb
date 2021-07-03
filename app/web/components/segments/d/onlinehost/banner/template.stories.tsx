import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BannerSegmentTemplate, BannerSegmentTemplateProps } from './template';

export default {
  title: 'Templates/D/OnlineHosts',
  component: BannerSegmentTemplate,
} as Meta;

const BannerTemplateStory: Story<BannerSegmentTemplateProps> = (args) => (
  <BannerSegmentTemplate {...args} />
);

export const Banner = BannerTemplateStory.bind({});
Banner.args = {};
