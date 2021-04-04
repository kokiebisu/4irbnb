import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BannerTemplate, BannerTemplateProps } from './template';

export default {
  title: 'Templates/Host/Homes',
  component: BannerTemplate,
} as Meta;

const BannerTemplateStory: Story<BannerTemplateProps> = (args) => (
  <BannerTemplate {...args} />
);

export const Banner = BannerTemplateStory.bind({});
Banner.args = {};
