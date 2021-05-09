import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  OnlineHostHeaderTemplate,
  OnlineHostHeaderTemplateProps,
} from './template';

export default {
  title: 'Organisms/Header',
  component: OnlineHostHeaderTemplate,
} as Meta;

const HeaderStory: Story<OnlineHostHeaderTemplateProps> = (args) => (
  <OnlineHostHeaderTemplate {...args} />
);

export const Details = HeaderStory.bind({});
Details.args = {};
