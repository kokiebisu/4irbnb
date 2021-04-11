import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ClosedButton, ClosedButtonProps } from '../button.closed';

export default {
  title: 'Atoms/Button',
  component: ClosedButton,
} as Meta;

const ButtonStory: Story<ClosedButtonProps> = (args) => (
  <ClosedButton {...args} />
);

export const Closed = ButtonStory.bind({});
Closed.args = {
  content: 'close',
  selected: false,
};
