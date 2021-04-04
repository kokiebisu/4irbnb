import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ReadyTemplate, ReadyTemplateProps } from './template';

export default {
  title: 'Templates/Host/Homes',
  component: ReadyTemplate,
} as Meta;

const ReadyTemplateStory: Story<ReadyTemplateProps> = (args) => (
  <ReadyTemplate {...args} />
);

export const Ready = ReadyTemplateStory.bind({});
Ready.args = {};
