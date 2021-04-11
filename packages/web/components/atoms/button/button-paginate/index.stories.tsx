import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PaginateButton, PaginateButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: PaginateButton,
} as Meta;

const ButtonStory: Story<PaginateButtonProps> = (args) => (
  <PaginateButton {...args} />
);

export const Paginate = ButtonStory.bind({});
Paginate.args = {
  direction: 'left',
  disable: false,
  size: 3,
};
