import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BackTemplate, BackTemplateProps } from './template';

export default {
  title: 'Templates/D/OnlineHosts',
  component: BackTemplate,
} as Meta;

const TemplateStory: Story<BackTemplateProps> = (args) => (
  <BackTemplate {...args} />
);

export const Back = TemplateStory.bind({});
Back.args = {};
