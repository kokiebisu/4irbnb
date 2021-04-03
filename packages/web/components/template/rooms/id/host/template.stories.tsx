import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HostTemplate, HostTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Index',
  component: HostTemplate,
} as Meta;

const TemplateStory: Story<HostTemplateProps> = (args) => (
  <HostTemplate {...args} />
);

export const Host = TemplateStory.bind({});
Host.args = {
  ...mockData,
};
