import React from 'react';
import { Story, Meta } from '@storybook/react';
import { OnlineTemplate, OnlineTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Index',
  component: OnlineTemplate,
} as Meta;

const OnlineTemplateStory: Story<OnlineTemplateProps> = (args) => (
  <OnlineTemplate {...args} />
);

export const Online = OnlineTemplateStory.bind({});
Online.args = {
  ...mockData,
};
