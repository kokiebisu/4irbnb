import React from 'react';
import { Story, Meta } from '@storybook/react';
import { WhiteHeaderTemplate, WhiteHeaderTemplateProps } from './template';

export default {
  title: 'Organisms/Header',
  component: WhiteHeaderTemplate,
} as Meta;

const HeaderStory: Story<WhiteHeaderTemplateProps> = (args) => (
  <WhiteHeaderTemplate {...args} />
);

export const White = HeaderStory.bind({});
White.args = {};
