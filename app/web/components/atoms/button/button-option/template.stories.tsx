import React from 'react';
import { Story, Meta } from '@storybook/react';
import { OptionButtonTemplate, OptionButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: OptionButtonTemplate,
} as Meta;

const ButtonStory: Story<OptionButtonTemplateProps> = (args) => (
  <OptionButtonTemplate {...args} />
);

export const Option = ButtonStory.bind({});
Option.args = {
  name: 'Option',
  bold: false,
};
