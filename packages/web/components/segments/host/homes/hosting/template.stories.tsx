import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HostingTemplate, HostingTemplateProps } from './template';

export default {
  title: 'Templates/Host/Homes',
  component: HostingTemplate,
} as Meta;

const HostingTemplateStory: Story<HostingTemplateProps> = (args) => (
  <HostingTemplate {...args} />
);

export const Hosting = HostingTemplateStory.bind({});
Hosting.args = {};
