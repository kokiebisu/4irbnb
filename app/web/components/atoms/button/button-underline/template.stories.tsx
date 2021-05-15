import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  UnderlineButtonTemplate,
  UnderlineButtonTemplateProps,
} from './template';

export default {
  title: 'Atoms/Button',
  component: UnderlineButtonTemplate,
} as Meta;

const ButtonStory: Story<UnderlineButtonTemplateProps> = (args) => (
  <UnderlineButtonTemplate {...args} />
);

export const Underline = ButtonStory.bind({});
Underline.args = {
  title: 'Title here',
  font: 14,
  bold: false,
  unselected: false,
};
