import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PrimaryButtonTemplate, PrimaryButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: PrimaryButtonTemplate,
} as Meta;

const ButtonStory: Story<PrimaryButtonTemplateProps> = (args) => (
  <PrimaryButtonTemplate {...args} />
);

export const Primary = ButtonStory.bind({});
Primary.args = {
  title: 'Button',
  size: 'md',
  fill: 'black',
  loading: false,
  disable: false,
  color: 'white',
  stretch: false,
};
Primary.argTypes = {
  color: {
    control: {
      disable: true,
    },
  },
};
