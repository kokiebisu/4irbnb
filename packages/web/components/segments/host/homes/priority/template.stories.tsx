import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PriorityTemplate, PriorityTemplateProps } from './template';

export default {
  title: 'Templates/Host/Homes',
  component: PriorityTemplate,
} as Meta;

const PriorityTemplateStory: Story<PriorityTemplateProps> = (args) => (
  <PriorityTemplate {...args} />
);

export const Priority = PriorityTemplateStory.bind({});
Priority.args = {};
