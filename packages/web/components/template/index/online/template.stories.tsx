import React from 'react';
import { Story, Meta } from '@storybook/react';
import { OnlineTemplate, OnlineTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Index',
  component: OnlineTemplate,
} as Meta;

const TemplateStory: Story<OnlineTemplateProps> = (args) => (
  <OnlineTemplate {...args} />
);

export const Online = TemplateStory.bind({});
Online.args = {
  ...mockData,
};
