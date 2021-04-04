import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HostTemplate, HostTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Experiences/ID',
  component: HostTemplate,
} as Meta;

const HostTemplateStory: Story<HostTemplateProps> = (args) => (
  <HostTemplate {...args} />
);

export const Host = HostTemplateStory.bind({});
Host.args = {
  ...mockData,
};
