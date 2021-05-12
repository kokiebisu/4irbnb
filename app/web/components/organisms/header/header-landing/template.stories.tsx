import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LandingHeaderTemplate, LandingHeaderTemplateProps } from './template';

export default {
  title: 'Organisms/Header',
  component: LandingHeaderTemplate,
} as Meta;

const HeaderStory: Story<LandingHeaderTemplateProps> = (args) => (
  <LandingHeaderTemplate {...args} />
);

export const Details = HeaderStory.bind({});
Details.args = {};
