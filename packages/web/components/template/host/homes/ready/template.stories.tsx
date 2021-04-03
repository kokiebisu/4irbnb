import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ReadyTemplate, ReadyTemplateProps } from './template';

export default {
  title: 'Templates/Host/Homes',
  component: ReadyTemplate,
} as Meta;

const TemplateStory: Story<ReadyTemplateProps> = (args) => (
  <ReadyTemplate {...args} />
);

export const Ready = TemplateStory.bind({});
Ready.args = {};
