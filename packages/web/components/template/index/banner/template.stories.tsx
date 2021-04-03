import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  BannerTemplate,
  BannerTemplateProps,
} from '@template/index/banner/template';

export default {
  title: 'Templates/Index',
  component: BannerTemplate,
} as Meta;

const TemplateStory: Story<BannerTemplateProps> = (args) => (
  <BannerTemplate {...args} />
);

export const Banner = TemplateStory.bind({});
Banner.args = {};
