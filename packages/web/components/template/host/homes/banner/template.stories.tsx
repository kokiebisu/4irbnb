import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  BannerTemplate,
  BannerTemplateProps,
} from '@template/host/homes/banner/template';

export default {
  title: 'Templates/Experiences/ID',
  component: BannerTemplate,
} as Meta;

const TemplateStory: Story<BannerTemplateProps> = (args) => (
  <BannerTemplate {...args} />
);

export const Banner = TemplateStory.bind({});
Banner.args = {};
