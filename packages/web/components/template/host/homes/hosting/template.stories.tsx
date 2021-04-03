import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  HostingTemplate,
  HostingTemplateProps,
} from '@template/host/homes/hosting/template';

export default {
  title: 'Templates/Experiences/ID',
  component: HostingTemplate,
} as Meta;

const TemplateStory: Story<HostingTemplateProps> = (args) => (
  <HostingTemplate {...args} />
);

export const Hosting = TemplateStory.bind({});
Hosting.args = {};
