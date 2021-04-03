import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BringTemplate, BringTemplateProps } from './template';

export default {
  title: 'Templates/D/OnlineHosts',
  component: BringTemplate,
} as Meta;

const TemplateStory: Story<BringTemplateProps> = (args) => (
  <BringTemplate {...args} />
);

export const Bring = TemplateStory.bind({});
Bring.args = {};
