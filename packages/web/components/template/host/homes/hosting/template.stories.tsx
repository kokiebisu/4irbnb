import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HostingTemplate, HostingTemplateProps } from './template';

export default {
  title: 'Templates/Host/Homes',
  component: HostingTemplate,
} as Meta;

const TemplateStory: Story<HostingTemplateProps> = (args) => (
  <HostingTemplate {...args} />
);

export const Hosting = TemplateStory.bind({});
Hosting.args = {};
