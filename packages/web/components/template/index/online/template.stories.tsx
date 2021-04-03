import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  OnlineTemplate,
  OnlineTemplateProps,
} from '@template/index/online/template';
import { items, dark } from './mock';

export default {
  title: 'Templates/Index',
  component: OnlineTemplate,
} as Meta;

const TemplateStory: Story<OnlineTemplateProps> = (args) => (
  <OnlineTemplate {...args} />
);

export const Online = TemplateStory.bind({});
Online.args = {
  items,
  dark,
};
